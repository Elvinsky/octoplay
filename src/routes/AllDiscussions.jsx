import {TablePagination} from '@mui/material';
import {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import CustomBackdrop from '../components/Backdrop';
import DiscussionTile from '../components/DiscussionTile';
import useAdminCheck from '../hooks/useAdminCheck';
import useFetch from '../hooks/useFetch';
import {fetchPaginatedDiscussions} from '../redux/discussions/discussionsActions';
import {
    selectDisc,
    selectDiscCount,
    selectDiscError,
    selectDiscLoading,
} from '../redux/discussions/discussionSelector';

function AllDiscussions() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(18);
    useFetch(
        fetchPaginatedDiscussions(
            rowsPerPage * page,
            rowsPerPage * page + rowsPerPage
        ),
        [page, rowsPerPage]
    );
    const handleChangePage = useCallback((event, page) => {
        setPage(page);
    }, []);
    const handleChangeRowsPerPage = useCallback((event) => {
        setRowsPerPage(event.target.value);
    }, []);
    const navigate = useNavigate();
    const count = useSelector(selectDiscCount);
    const discussions = useSelector(selectDisc);
    const discussionsError = useSelector(selectDiscError);
    const discussionsLoading = useSelector(selectDiscLoading);
    const [, admin] = useAdminCheck();
    const handleGoBack = useCallback(() => {
        navigate('/newspage');
    }, [navigate]);
    if (discussionsLoading && !discussionsError) return <CustomBackdrop />;
    return (
        <div className="flex flex-col gap-7 w-3/4 m-auto mt-8  p-3 rounded-md shadow-lg border border-[#0001]">
            <div className="flex flex-row gap-5 items-start">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/507/507257.png"
                    className="h-4 w-4"
                    alt="back"
                    onClick={handleGoBack}
                />
                <h1 className="text-3xl font-semibold">All Discussions</h1>
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
                {/* {admin && <AddNewsModal />} */}
            </div>
            <div className="flex flex-row flex-wrap w-full gap-5 items-center justify-center p-4">
                {discussions.map((item) => (
                    <DiscussionTile disc={item} admin={admin} key={item.id} />
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

export default AllDiscussions;
