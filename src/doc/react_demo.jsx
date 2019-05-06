// 单项
class Item extends React.Component {
    state = {
    }

    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    // 补全删除功能
    deleteItem() {
        this.props.deleteItem && this.props.deleteItem(this.props.el);
    }

    render() {
        return (
            <div onClick={this.deleteItem}>
                {/* 在此完成功能 */}
                <button>删除 {this.props.el.text}</button>
            </div>
        )
    }
}

// 列表
class List extends React.Component {
    state = {
        list: new Array(10).fill('')
    }

    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    // 填充数组id
    componentWillMount() {
        var list = this.state.list.map((el, index) => {
            return { text: `第${index}项`, id: index }
        });
        this.setState({
            list: list
        });
    }
    deleteItem(delelteEl) {
        var list = this.state.list;
        var list = list.filter((el) => {
            console.log("el.id", el.id);
            console.log("delelteEl.id", delelteEl.id);

            return el.id != delelteEl.id;
        });

        this.setState({
            list: list
        });
    }
    render() {
        return (
            <div>
                <h1>List</h1>
                {
                    this.state.list.map((el, index) => {
                        return <Item el={el} key={el.id} deleteItem={this.deleteItem} />
                    })
                }
            </div>
        )
    }
}
ReactDOM.render(
    <List />,
    document.getElementById('root')
);
