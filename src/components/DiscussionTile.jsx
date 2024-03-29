import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function DiscussionTile({admin, disc}) {
    const navigate = useNavigate();
    const handleShowDisc = useCallback(() => {
        navigate(`/discussion/${disc.id}`);
    }, [disc.id, navigate]);
    return (
        <div
            onClick={handleShowDisc}
            className="flex flex-row gap-5 shadow-lg border bg-[#1eff0020] border-[#0001] w-[65%] p-3 items-center justify-between last:mb-5
                       transition-all duration-300 hover:scale-[103%] rounded-[10px]"
        >
            <div className="flex flex-col p-1 gap-4">
                <h2 className="text-2xl font-semibold">{disc.title}</h2>
                <div className="flex flex-row justify-between items-center gap-3">
                    <div className="flex flex-row gap-1 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{disc.createdAt}</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span>{disc.watched}</span>
                    </div>

                    <div className="flex flex-row gap-1 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                        <span>{disc.liked}</span>
                    </div>
                </div>
            </div>
            <img src={disc.thumbnailPic} alt="discuss" className="ml-4" />
        </div>
    );
}

export default DiscussionTile;
