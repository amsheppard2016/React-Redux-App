import React from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions";

import Loader from "react-loader-spinner";

const DogImage = (props) => {
    return (
        <div>
            {props.isLoading ? (
                <Loader type="Circles" color="#00BFFF" height={80} width={80} />
            ) : (
                <div>
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
