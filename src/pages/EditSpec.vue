<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-8">
            <form>
                <div class="form-row mt-2 mb-4 border-bottom align-items-end row justify-content-between">
                    <h2>产品规格</h2>
                    <span>标识：{{spec.id}}</span>
                    <span>日期：{{spec.modifiedDate}}</span>
                </div>

                <div class="form-row">
                    <div class="form-group col-12 col-sm-3">
                        <label for="code">编号：</label>
                        <input type="text" class="form-control" id="code" v-model='spec.code'>
                    </div>
                    <div class="form-group col-12 col-sm-8 ml-sm-auto">
                        <label for="name">名称：</label>
                        <input type="text" class="form-control" id="name" v-model="spec.name">
                    </div>
                </div>

                <div class="form-group">
                    <label for="desc">描述</label>
                    <input type="text" class="form-control" id="desc" v-model="spec.desc">
                </div>

                <div class="row mb-2">
                    <div class="col col-auto">
                        <span>坯布:</span>
                    </div>
                    <div class="col border">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <div class="row align-items-end">
                                            <label>纱支：</label>
                                        </div>
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="desc">密度：</label>
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                    </div>
                                </div>
                                <div class="col col-4">
                                    <div class="form-group">
                                        <label for="desc">门幅：</label>
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                    </div>
                                    <div class="form-group">
                                        <label for="desc">克重：</label>
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col col-auto">
                        <span>成品:</span>
                    </div>
                    <div class="col border">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="desc">纱支：</label>
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="desc">密度：</label>
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="desc">密度：</label>
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="desc">门幅：</label>
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                    </div>
                                    <div class="form-group">
                                        <label for="desc">克重：</label>
                                        <input type="text" class="form-control" id="desc" v-model="spec.desc">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <button type="确认" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
    <!-- <v-layout row>
        <v-flex xs10 offset-xs1 md8 offset-md2>
            <form>
                <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Item" required @change="$v.select.$touch()"
                    @blur="$v.select.$touch()"></v-select>
                <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"></v-checkbox>
                <v-btn @click="submit">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </form>
        </v-flex>
    </v-layout> -->

</template>

<script>
    import {
        validationMixin
    } from 'vuelidate'
    import {
        required,
        maxLength,
        email
    } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        validations: {
            name: {
                required,
                maxLength: maxLength(10)
            },
            email: {
                required,
                email
            },
            select: {
                required
            },
            checkbox: {
                required
            }
        },

        data: () => ({
            spec: {
                id: '1234556677899',
                code: '00001',
                name: '6850 2/3斜（左右捻）',
                desc: 'desc of 6850 2/3斜（左右捻）',
                constructure: '2/3斜',
                grey: { //'坯布' 
                    yarn: { //纱织 
                        warp: {
                            value: [6850],
                            unit: 'g'
                        },
                        weft: {
                            value: [6850],
                            unit: 'g'
                        }
                    },
                    dnsty: { //密度 
                        warp: {
                            value: [6850],
                            unit: 'g'
                        },
                        weft: {
                            value: [6850],
                            unit: 'g'
                        }
                    },
                    width: "'178(70')",
                    GSM: 150
                },
                product: {
                    yarn: {
                        warp: {
                            value: [6850],
                            unit: 'g'
                        },
                        weft: {
                            value: [6850],
                            unit: 'g'
                        }
                    },
                    dnstyBW: {
                        warp: {
                            value: [6850],
                            unit: 'g'
                        },
                        weft: {
                            value: [6850],
                            unit: 'g'
                        }
                    },
                    dnstyAW: {
                        warp: {
                            value: [6850],
                            unit: 'g'
                        },
                        weft: {
                            value: [6850],
                            unit: 'g'
                        }
                    },
                    width: "325(128')",
                    GSM: 250
                },
                createDate: new Date(2018, 6,
                    27),
                modifiedDate: new Date(2018, 6, 27)
            }
        }),

        computed: {
            checkboxErrors() {
                const errors = []
                if (!this.$v.checkbox.$dirty) return errors;
                !this.$v.checkbox.required && errors.push('You must agree to continue!')
                return errors
            },
            selectErrors() {
                const errors = []
                if (!this.$v.select.$dirty) return errors;
                !this.$v.select.required && errors.push('Item is required')
                return errors
            },
            nameErrors() {
                const errors = []
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
                !this.$v.name.required && errors.push('Name is required.')
                return errors
            },
            emailErrors() {
                const errors = []
                if (!this.$v.email.$dirty) return errors;
                !this.$v.email.email && errors.push('Must be valid e-mail');
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            }
        },

        methods: {
            submit() {
                this.$v.$touch()
            },
            clear() {
                this.$v.$reset()
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = false
            }
        }
    }
</script>
