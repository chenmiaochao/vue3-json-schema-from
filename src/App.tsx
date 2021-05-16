import { defineComponent, h, reactive, ref } from "vue"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require("./assets/logo.png")

export default defineComponent({
  setup() {
    const state = reactive({
      name: "miao",
    })

    const numberRef = ref(1)
    setInterval(() => {
      state.name += "1"
      numberRef.value += 1
    }, 1000)
    // const number = numberRef.value //当放在外面 因为setup只执行一次 所以变量不会发生变化

    return () => {
      const number = numberRef.value //放在return里会执行 放在外面的话

      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{state.name + number}</p>
        </div>
      )
      //   return h("div", { id: "app" }, [
      //     h("img", {
      //       alt: "Vue logo",
      //       src: img,
      //     }),
      //     h("p", state.name + number),
      //   ])
      // }
    }
  },
})
