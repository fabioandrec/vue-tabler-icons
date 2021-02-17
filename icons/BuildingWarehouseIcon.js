import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BuildingWarehouseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  },

  setup(props, ctx) {
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const attrs = { ...ctx.attrs
    };
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    return () => createVNode("svg", mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-building-warehouse",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, { ...attrs
    }), [createTextVNode("   "), createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 21v-13l9 -4l9 4v13"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M13 13h4v8h-10v-6h6"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3"
    }), createTextVNode(" ")]);
  }

};