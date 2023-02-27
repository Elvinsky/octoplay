import {NavLink} from 'react-router-dom';
import useAdminCheck from '../hooks/useAdminCheck';
import CustomBackdrop from './Backdrop';
function Header() {
    const [user] = useAdminCheck();
    if (!user) return <CustomBackdrop />;
    return (
        <header className="flex  m-auto items-center justify-center p-3 bg-[#00f0109a] text-black">
            <div className="font-black text-2xl flex items-center gap-2 mr-auto">
                OCTO PLAY
                <img
                    src={process.env.PUBLIC_URL + '/images/octopus.png'}
                    alt="octo"
                    className="h-16"
                ></img>
            </div>
            <div className="flex gap-7 flex-row m-auto">
                <NavLink
                    to="/home"
                    end="true"
                    className={({isActive}) =>
                        isActive
                            ? 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer border-b-[3px] border-black'
                            : 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    end="true"
                    className={({isActive}) =>
                        isActive
                            ? 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer border-b-[3px] border-black'
                            : 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer'
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/newspage"
                    end="true"
                    className={({isActive}) =>
                        isActive
                            ? 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer border-b-[3px] border-black'
                            : 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer'
                    }
                >
                    News
                </NavLink>
                <NavLink
                    to="/"
                    end="true"
                    // className="font-medium text-xl flex items-center transition-all
                    //  duration-300 hover:text-emerald-600 hover:scale-110 hover:cursor-pointer"
                    className={({isActive}) =>
                        isActive
                            ? 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer border-b-[3px] border-black'
                            : 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer'
                    }
                >
                    Top
                </NavLink>
                <NavLink
                    to="/streams"
                    end="true"
                    className={({isActive}) =>
                        isActive
                            ? 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer border-b-[3px] border-black'
                            : 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer'
                    }
                >
                    Streams
                </NavLink>
            </div>
            <div className="ml-auto flex flex-row">
                <NavLink
                    to="/userpage"
                    end="true"
                    className={({isActive}) =>
                        isActive
                            ? 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer border-b-[3px] border-black'
                            : 'font-medium text-xl p-1 flex items-center transition-all duration-300  hover:scale-110 hover:border-b-[3px] hover:border-black hover:cursor-pointer'
                    }
                >
                    {user.name}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
