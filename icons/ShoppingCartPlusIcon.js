import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ShoppingCartPlusIcon',
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
      "class": "icon icon-tabler icon-tabler-shopping-cart-plus"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "6",
        cy: "19",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "17",
        cy: "19",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 17h-11v-14h-2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15 6h6m-3 -3v6"
      }
    }), " "]);
  }
};