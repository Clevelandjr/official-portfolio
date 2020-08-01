import React from 'react';
import Logo from './assets/author.jpg'

class Profile extends React.Component {
    render() {
        return (
            <div className="ms-textAlignCenter">
                <div className="sg-profile-image">
                    <img src={Logo} alt="profile image"/>
                </div>
                <h2 className="ms-font-m-plus ms-fontSize-xl">Cleveland Pitt Jr.</h2>
                <hr />
                <p className="ms-font-m-plus ms-fontSize-mPlus">Software Engineer</p>
                <hr />
            </div>
        )
    }
}

export default Profile;