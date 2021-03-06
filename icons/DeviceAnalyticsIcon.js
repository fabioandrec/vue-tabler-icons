import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DeviceAnalyticsIcon',
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
      "class": "icon icon-tabler icon-tabler-device-analytics"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "4",
        width: "18",
        height: "12",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "20",
        x2: "17",
        y2: "20"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "16",
        x2: "9",
        y2: "20"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "16",
        x2: "15",
        y2: "20"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 12l3 -3l2 2l3 -3"
      }
    }), " "]);
  }
};