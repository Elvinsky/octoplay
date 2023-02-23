import {TablePagination} from '@mui/material';
import {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import AddNewsModal from '../components/AddNewsModal';
import CustomBackdrop from '../components/Backdrop';
import NewsCard from '../components/NewsTile';
import useAdminCheck from '../hooks/useAdminCheck';
import useFetch from '../hooks/useFetch';
import {deleteNewsItem, fetchPaginatedNews} from '../redux/news/newsActions';
import {
    selectNews,
    selectNewsAmount,
    selectNewsError,
    selectNewsLoading,
} from '../redux/news/newsSelectors';

function AllNews() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(18);
    const [wasEdited, setWasEdited] = useState(false);
    const [, admin] = useAdminCheck();

    useFetch(
        fetchPaginatedNews(
            rowsPerPage * page,
            rowsPerPage * page + rowsPerPage
        ),
        [wasEdited, page, rowsPerPage]
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangePage = useCallback((event, page) => {
        setPage(page);
    }, []);
    const handleChangeRowsPerPage = useCallback((event) => {
        setRowsPerPage(event.target.value);
    }, []);

    const count = useSelector(selectNewsAmount);
    const news = useSelector(selectNews);
    const newsLoading = useSelector(selectNewsLoading);
    const newsError = useSelector(selectNewsError);

    const handleGoBack = useCallback(() => {
        navigate('/newspage');
    }, [navigate]);

    const handleDeleteItem = useCallback(
        (id) => {
            dispatch(deleteNewsItem(id));
            setWasEdited(!wasEdited);
        },
        [dispatch, wasEdited]
    );
    const handleShowNewsDetails = useCallback(
        (id) => {
            navigate(`/newspage/${id}`);
        },
        [navigate]
    );
    const handleEditCheck = useCallback(() => {
        setWasEdited(!wasEdited);
    }, [wasEdited]);

    if (!newsError && newsLoading) return <CustomBackdrop />;
    else if (!news.map) return <CustomBackdrop />;
    else {
        return (
            <div className="flex flex-col gap-7 w-3/4 m-auto mt-8 p-3 rounded-md shadow-lg border border-[#0001]">
                <div className="flex flex-row gap-5 items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/507/507257.png"
                        className="h-4 w-4"
                        alt="back"
                        onClick={handleGoBack}
                    />
                    <h1 className="text-3xl font-semibold">All News</h1>
                    {admin && <AddNewsModal />}{' '}
                    <TablePagination
                        component="div"
                        count={count}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[9, 18, 27, 30, 33]}
                        sx={{marginLeft: 'auto'}}
                    />
                </div>

                <div className="flex flex-row gap-4 flex-wrap items-center mb-4 justify-center">
                    {news.map((item) => (
                        <NewsCard
                            news={item}
                            admin={admin}
                            key={item.id}
                            curPath={'/newspage/allnews'}
                            onEditCheck={handleEditCheck}
                            onDelete={handleDeleteItem}
                            onShowNews={handleShowNewsDetails}
                        />
                    ))}
                </div>
                <TablePagination
                    component="div"
                    count={count}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[9, 18, 27, 30, 33]}
                />
            </div>
        );
    }
}

export default AllNews;
