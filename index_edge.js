/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'a',
                type: 'image',
                rect: ['-849px', '-316px','2260px','720px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-1533px', '-108px','3630px','610px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.07','0.07']]
            },
            {
                id: 'li',
                type: 'image',
                rect: ['-938px', '-1165px','2440px','2790px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['-24px', '-23px','200px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.jpg",'0px','0px'],
                transform: [[],[],[],['0.65','0.65']]
            },
            {
                id: 'c',
                type: 'image',
                rect: ['-5px', '-3px','163px','163px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"c.jpg",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-10px', '129px','200px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px'],
                transform: [[],[],[],['0.65','0.65']]
            },
            {
                id: '_3',
                type: 'image',
                rect: ['-191px', '-25px','200px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.jpg",'0px','0px'],
                transform: [[],[],[],['0.65','0.65']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_c}": [
                ["style", "top", '-3px'],
                ["transform", "scaleY", '0.8'],
                ["style", "height", '163px'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '-5px'],
                ["style", "width", '163px']
            ],
            "${__1}": [
                ["style", "top", '-25px'],
                ["transform", "scaleY", '0.65'],
                ["transform", "scaleX", '0.65'],
                ["style", "opacity", '0'],
                ["style", "left", '-23px']
            ],
            "${_li}": [
                ["style", "top", '-1165px'],
                ["style", "left", '-938px'],
                ["style", "opacity", '0'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,2440,2790,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_a}": [
                ["style", "top", '-406px'],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-849px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '150px'],
                ["style", "width", '420px']
            ],
            "${_t}": [
                ["style", "top", '-108px'],
                ["transform", "scaleY", '0.07'],
                ["transform", "scaleX", '0.07'],
                ["style", "opacity", '0'],
                ["style", "left", '-1533px']
            ],
            "${__2}": [
                ["style", "top", '-23px'],
                ["transform", "scaleY", '0.65'],
                ["transform", "scaleX", '0.65'],
                ["style", "opacity", '0'],
                ["style", "left", '-24px']
            ],
            "${__3}": [
                ["style", "top", '-25px'],
                ["transform", "scaleY", '0.65'],
                ["transform", "scaleX", '0.65'],
                ["style", "opacity", '0'],
                ["style", "left", '-24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "style", "${_li}", "background-position", [0,-790], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5000, duration: 289, easing: "easeInOutCubic" },
                { id: "eid43", tween: [ "style", "${_c}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 556, easing: "easeInOutCubic" },
                { id: "eid5", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 8889, duration: 1011, easing: "easeInOutCubic" },
                { id: "eid22", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 556, easing: "easeInOutCubic" },
                { id: "eid44", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 250, easing: "easeInOutCubic" },
                { id: "eid45", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250, easing: "easeInOutCubic" },
                { id: "eid34", tween: [ "style", "${_li}", "clip", [1350,2440,2790,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2440,2790,0]}], position: 8889, duration: 456, easing: "easeInOutCubic" },
                { id: "eid19", tween: [ "style", "${_a}", "top", '-316px', { fromValue: '-406px'}], position: 0, duration: 200, easing: "easeInOutCubic" },
                { id: "eid37", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid41", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid42", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 9344, duration: 500, easing: "easeInOutCubic" },
                { id: "eid2", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 1011, easing: "easeInOutCubic" },
                { id: "eid3", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 645, easing: "easeInOutCubic" },
                { id: "eid25", tween: [ "style", "${_li}", "top", '-1235px', { fromValue: '-1165px'}], position: 4750, duration: 539, easing: "easeInOutCubic" },
                { id: "eid32", tween: [ "style", "${_li}", "top", '-1382px', { fromValue: '-1235px'}], position: 8889, duration: 556, easing: "easeInOutCubic" },
                { id: "eid38", tween: [ "style", "${_t}", "top", '-188px', { fromValue: '-108px'}], position: 0, duration: 1011, easing: "easeInOutCubic" },
                { id: "eid35", tween: [ "style", "${_t}", "top", '-194px', { fromValue: '-108px'}], position: 9344, duration: 500, easing: "easeInOutCubic" },
                { id: "eid18", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 556, easing: "easeInOutCubic" },
                { id: "eid31", tween: [ "style", "${_a}", "opacity", '0', { fromValue: '1'}], position: 4444, duration: 556, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2016667");
