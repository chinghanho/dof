(function () {

    'use strict'

    window.App = new Vue({

        el: "#app",

        data: {
            CoCTypes: [
                { text: "M43   0.015", value: "0.015" },
                { text: "APS-C 0.019", value: "0.019" },
                { text: "FF    0.029", value: "0.029" },
            ],
            coc: 0.015,
            distance: (3 * 100 * 10),
            f_number: 1.4,
            focal: 50,
            dof: 0,
        },

        computed: {
            hyperFocal: function () {
                return (this.focal * this.focal) / (this.f_number * this.coc)
            },
            nearPoint: function () {
                return (this.hyperFocal * this.distance) / (this.hyperFocal + (this.distance - this.focal))
            },
            farPoint: function () {
                return (this.hyperFocal * this.distance) / (this.hyperFocal - (this.distance - this.focal))
            },
            dof: function () {
                return this.farPoint - this.nearPoint
            }
        },

        methods: {
            onSelect: function () {
                this.dof = this.farPoint - this.nearPoint
            }
        }
    })

})()
