import React from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions";

import Loader from "react-loader-spinner";

const DogImage = (props) => {
    return (
        <div>
            {props.isLoading ? (
                <Loader
                    type="Circles"
                    color="#954F6F"
                    height={80}
                    width={80}
                    timeout={4000}
                />
            ) : (
                <div className="photoandbutton">
                    <img src={props.dogUrl} alt="" />
                    <button
                        onClick={() => {
                            props.fetchData();
                        }}
                    >
                        fetch data
                    </button>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dogUrl: state.dogUrl,
        isLoading: state.isLoading,
        error: state.error,
    };
};
export default connect(mapStateToProps, { fetchData })(DogImage);
