import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile({ session, setSession, profile, setProfile }) {
  const location = useLocation();
  const navigate = useNavigate();

  function goBack() {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  }

  console.log(session);
  return (
    <div className="profile__page">
      <div className="back__button">
        <button className="back__icon" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <p className="back__tag">Back</p>
      </div>
      {session ? (
        <div className="user__profile--container">
          <div className="user__profile--wrapper">
            <h1 className="user__profile--title">Profile</h1>
            <div className="user__profile--info">
              <div className="user__profile--item profile__first-name">
                <span className="orange user__profile--label">Name: </span>
                <div className="user__profile--credentials">
                  {`${session.user.user_metadata.first_name}
                  ${session.user.user_metadata.last_name}`}
                </div>
              </div>
              <div className="user__profile--item profile__email">
                <span className="orange user__profile--label">Email: </span>
                <div className="user__profile--credentials">
                  {session.user.user_metadata.email}
                </div>
              </div>
              <div className="user__profile--item profile__phone-number">
                <span className="orange user__profile--label">
                  Phone Number:{" "}
                </span>
                <div className="user__profile--credentials">
                  {session.user.user_metadata.phone_number}
                </div>
              </div>
            </div>
            <div className="user__profile--item profile__last-signin">
              <div className="user__profile--credentials user__profile--last-signin">
                <span className="orange user__profile--label">
                  Last signed in at:{" "}
                </span>
                {new Date(
                  session.user.identities?.[0]?.last_sign_in_at,
                ).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
