/**
 * 轨迹查询状态
 */
const state = {
    showModal: false,  // 是否显示弹出框
    showTrack: false, // 是否显示绘制轨迹
    degreesArrayHeights: [ // 轨迹绘制测试数据
        107.50157998833404, 33.92399482954094, 0,
        107.53566413990926, 34.13483753468435, 1.194610567567985,
        107.61271020703762, 33.89295035155134, 1.1775817427935182,
        107.67241234562839, 33.974011502786134, 1.2233896865124019,
        107.79186522785582, 33.888032763602865, 1.5406099401501432,
        107.79186522785582, 33.888032763602865, 1.5406099401501432,
        107.7025440165927, 34.11244320669108, 1.2812642137768455 ,
        107.9216960079553, 34.17239610319779, 0.7961754384380609 ,
        107.95642339089892, 33.91427114971724, 0.822563193323224 ,
        108.05279047984482, 34.096999369837945, 1.3522901885436596,
        108.17314792630718, 33.97759521197825, 1.2179349418398144
    ]
}

const mutations = {
    /**
     * 更改弹出框状态
     * @param {*} state 
     * @param {*} status 
     */
    SET_SHOWMODAL_STATUS (state, status) {
        state.showModal = status; 
    },
    /**
     * 更改显示轨迹绘制状态
     * @param {*} state 
     * @param {*} status 
     */
    SET_SHOWTRACK_STATUS (state, status) {
        state.showTrack = status; 
    }
}

export default {
    state,
    mutations
}