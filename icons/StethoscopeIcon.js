import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'StethoscopeIcon',
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
      "class": "icon icon-tabler icon-tabler-stethoscope"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 15a6 6 0 1 0 12 0v-3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 3v2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 3v2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "20",
        cy: "10",
        r: "2"
      }
    }), " "]);
  }
};