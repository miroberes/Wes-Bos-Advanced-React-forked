import Items from '../components/Items';
const Home = props => {
    console.log('index.js Home props', props);

    return (
        <div>
            <Items />
        </div>
    );
};

// Home.getInitialProps = async props => {
//     console.log('initial props', props);

//     let homeProps = {me: "here"};

//     return { homeProps };
// };

export default Home;
