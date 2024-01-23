import {ref, computed, watch} from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const count = ref(0);
    const list = ref();
    if (localStorage.getItem("list")){
        list.value = JSON.parse(localStorage.getItem('list'));;
    }else {
        list.value = [];
    }

    watch(list.value, (newValue) => {
        localStorage.setItem('list', JSON.stringify(newValue));
        console.log(newValue);
    });
    function increment() {
        count.value++;
    }

    function add(item, soLuong) {
        item.soLuongGioHangL = soLuong;
        list.value.push(item)
    }

    function check(item, soLuong) {
        console.log(item);
        const giatri1 = item && item?.giatri1;
        const giatri2 = item && item?.giatri2;
        if (giatri1 && giatri2) {
            let check = list.value.find((x) => {
                return x.giatri1 === giatri1 && x.giatri2 === giatri2
            });
            if (!check) {
                add(item, soLuong);
            } else {
                check.soLuongGioHangL += soLuong;
            }
        } else if (giatri1) {

            let check = list.value.find((x) => {
                if (x?.value?.giatri1 === giatri1) {
                    x.soLuongGioHangL += soLuong;
                }
            });
            if (!check) {
                add(item, soLuong);
            } else {
                check.soLuongGioHangL += soLuong;
            }
        } else if (giatri2) {

            let check = list.value.find((x) => {
                if (x.value?.giatri2 === giatri2) {
                    x.soLuongGioHangL += soLuong;
                }
            });
            if (!check) {
                add(item, soLuong);
            } else {
                check.soLuongGioHangL += soLuong;
            }
        }

        increment();
    }
    return {count, increment, check, list};
})