export const Button = {
  render() {
    const h = arguments[0];
    return h("button", {
      on: {
        "click": this.handleClick
      }
    }, [this.$attrs.text]);
  },

  methods: {
    handleClick() {
      // eslint-disable-next-line
      console.log('Button is clicked!!');
    }

  }
};