import TabBar from '/js-study/Animal/components/TabBar.js';
import Content from '/js-study/Animal/components/Content.js';
import { request } from '/js-study/Animal/components/api.js';

export default function App($app) {
    this.state = {
        currentTab: 'all',
        photos: []
    };
    const tabBar = new TabBar({
        initialState: '',
        onClick: async (name) => {
            this.setState({
                ...this.state,
                currentTab: name,
                photos: await request(name==='all' ? '': name),
            });
        },
        $app
    });
    const content = new Content({
        $app,
        initialState: [],
    });

    this.setState = (newState) => {
        this.state = newState;
        tabBar.setState(this.state.currentTab);
        content.setState(this.state.photos);
    };

    const init = async () => {
        try {
            const initialPhotos = await request();
            this.setState({
                ...this.state,
                photos: initialPhotos,
            });
        }
        catch (err) {
            console.log(err);
        }
    };

    init();
}