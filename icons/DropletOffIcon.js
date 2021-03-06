import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DropletOffIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-droplet-off"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8.454 8.458l-1.653 2.545a6 6 0 0 0 10.32 6.123"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18 14a5.971 5.971 0 0 0 -.803 -3l-5.197 -8l-1.968 3.03"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 3l18 18"
      }
    }), " "]);
  }
};