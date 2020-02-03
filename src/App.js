import React from 'react';
import {connect, Provider} from 'react-redux';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {BrowserRouter, HashRouter} from "react-router-dom";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (
            <div className={styles.page}>
                <HeaderContainer/>
                <main className={styles.main}>
                    <Sidebar/>
                    <Content/>
                </main>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        initialized: state.init.initialized
    };
}

let AppConnect = connect(mapStateToProps, {initializeApp})(App);

export default function AppContainer(props) {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppConnect/>
            </HashRouter>
        </Provider>
    );
}


