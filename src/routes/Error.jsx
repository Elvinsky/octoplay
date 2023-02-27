import {Button} from '@mui/material';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function Error() {
    const naviagte = useNavigate();
    const handleGoNews = useCallback(() => {
        naviagte('/newspage');
    }, [naviagte]);
    const handleGoUser = useCallback(() => {
        naviagte('/userpage');
    }, [naviagte]);
    return (
        <div className="flex flex-col gap-3 justify-center items-center m-auto w-3/4 mt-5">
            <h1 className=" font-black text-3xl">
                Oops! It seems like some unexpected error occured =( <br />
            </h1>
            <div className="flex flex-row items-center justify-center">
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        marginRight: '1em',
                        backgroundColor: '#0ced31',
                        color: 'black',
                    }}
                    onClick={handleGoNews}
                >
                    Go to News
                </Button>
                <img
                    src={process.env.PUBLIC_URL + '/images/octopus4.png'}
                    alt="Choose your option"
                    className="h-[500px]"
                />
                <Button
                    variant="contained"
                    size="large"
                    sx={{backgroundColor: '#0ced31', color: 'black'}}
                    onClick={handleGoUser}
                >
                    Go to profile
                </Button>
            </div>
        </div>
    );
}

export default Error;
