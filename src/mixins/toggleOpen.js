export default {
    getInitialState() {
        return {
            isOpen: false
        }
    },
    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}