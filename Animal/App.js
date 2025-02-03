import TabBar from '/js-study/Animal/components/TabBar.js';
import Content from '/js-study/Animal/components/Content.js';
import { request } from '/js-study/Animal/components/api.js';

export default function App($app) {
    this.state = {
        currentTab: window.location.pathname.replace('/js-study', '') || 'all',
        photos: [],
    };

    const tab = new TabBar({
        $app,
        initialState: this.state.currentTab,
        onClick: async (name) => {
            history.pushState(null, `${name} 사진`, name); // URL 변경
            this.updateContent(name);
        },
    });

    const content = new Content({ $app, initialState: [] });

    this.setState = (newState) => {
        this.state = newState;
        tab.setState(this.state.currentTab);
        content.setState(this.state.photos);
    };

    this.updateContent = async (tabName) => {
        const currentTab = tabName === 'all' ? '' : tabName;
        const photos = await request(currentTab);
        this.setState({
            ...this.state,
            currentTab: tabName,
            photos: photos,
        });
    };

    window.addEventListener('popstate', () => {
        this.updateContent(window.location.pathname.replace('/', '') || 'all');
    });

    const init = async () => {
        this.updateContent(this.state.currentTab);
    };

    init();
}