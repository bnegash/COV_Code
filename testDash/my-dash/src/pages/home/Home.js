import TopBox from "../../components/topBox/TopBox";
import "./home.scss";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import {chartBoxUser} from "../../data";

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
        </div>
    );
};

export default Home;