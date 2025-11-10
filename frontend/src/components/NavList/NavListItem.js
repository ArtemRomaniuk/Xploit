export default class NavListItem {
  constructor(icon, value = "item", navTo) {
    this.icon = icon;
    this.value = value;
    this.navTo = navTo;
  }
}
