import { useEffect } from "react";

const ProfileDetails = () => {
    // const initialState = {
    //     access: typeof window !== "undefined" ? window.localStorage.getItem('access') : false,
    //     refresh: typeof window !== "undefined" ?  window.localStorage.getItem('refresh') : false,
    //     isAuthenticated: null,
    //     user: null
    // };

    const initialState = () => {
        if(localStorage === undefined) {
            console.log('undefine');
        }
    }
    return (
        useEffect(() => {
            <div className="form-container">
            <form className="form">
                <label htmlFor="user-company-name">Company Name:</label>
                <input type="text" value={localStorage.getItem('Cname')}  id="user-company-name" />

                <label htmlFor="email">Email</label>
                <input type="email" value={localStorage.getItem('Cmail')}  id="email" />

                <label>Mobile:</label>
                <input type="tel" name="tel" value={localStorage.getItem('Ctelephone')}  id="user-company-telephone" />

                <label>Address</label>
                <input type="text" name="address" value={localStorage.getItem('Caddress')}  id="user-company address" />

                <label>Motto:</label>
                <input type="text" name="motto" value={localStorage.getItem('Cmotto')}  id="user-company-motto" />

                <input type="submit" value="Done" className="text-white bg-green-800" />
            </form>
        </div>
        }, [initialState])
    );
}

export default ProfileDetails;
