export default class Section {
	constructor(options, containerSelector) {
      this._options = options;
      this._containerSelector = containerSelector;
      this._container = document.querySelector(this._containerSelector);
	}
    render() {
        this._options.items.forEach(item => this._options.renderer(item, this._container));
    }
    addItem(item) {
        this._options.renderer(item, this._container)
    }
}