import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('nd-button', Button)
Vue.component('nd-icon', Icon)
Vue.component('nd-button-group', ButtonGroup)

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
})

//单元测试
import chai from 'chai'
const expect = chai.expect;
import spies from 'chai-spies'
chai.use(spies)

//通过js把按钮写入页面中
{ //1.测试iconName属性

    const Constructor = Vue.extend(Button); //将Button组件转化为一个构造函数
    const NDbutton = new Constructor({ //创建一个NDbutton实例
        propsData: {
            iconName: 'download',
        }
    })
    NDbutton.$mount('#test'); //将NDbutton实例挂载到页面,也可不写实际的div
    let useElement = NDbutton.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-download')

} { //2.测试loading属性
    const Constructor = Vue.extend(Button); //将Button组件转化为一个构造函数
    const NDbutton = new Constructor({ //创建一个NDbutton实例
        propsData: {
            iconName: 'download',
            loading: true
        }
    })
    NDbutton.$mount();
    let useElement = NDbutton.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading')

} { //3.测试iconPosition属性
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button); //将Button组件转化为一个构造函数
    const NDbutton = new Constructor({ //创建一个NDbutton实例
        propsData: {
            iconName: 'download'
        }
    })
    NDbutton.$mount(div);
    let svg = NDbutton.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("1");
    NDbutton.$el.remove(); //清除NDbutton内的元素
    NDbutton.$destroy(); //清除NDbutton对象

} { //3.测试iconPosition属性
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button); //将Button组件转化为一个构造函数
    const NDbutton = new Constructor({ //创建一个NDbutton实例
        propsData: {
            iconName: 'download',
            iconPosition: 'right',
        }
    })
    NDbutton.$mount(div);
    let svg = NDbutton.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("2");
    NDbutton.$el.remove(); //清除NDbutton内的元素
    NDbutton.$destroy(); //清除NDbutton对象

} { //4.测试click事件
    const Constructor = Vue.extend(Button); //将Button组件转化为一个构造函数
    const NDbutton = new Constructor({ //创建一个NDbutton实例
        propsData: {
            iconName: 'download',
        }
    })
    NDbutton.$mount();
    let spy = chai.spy(function() {});
    NDbutton.$on('click', spy); //"间谍"监听
    let button = NDbutton.$el;
    button.click();
    expect(spy).to.have.been.called() //期待“间谍“函数被调用
}