import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'PresentationAnalyticsIcon',
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
      "class": "icon icon-tabler icon-tabler-presentation-analytics",
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
      "d": "M9 12v-4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M15 12v-2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 12v-1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 4h18"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 16v4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9 20h6"
    }), createTextVNode(" ")]);
  }

};