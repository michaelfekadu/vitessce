import {
    VitessceConfig,
    CoordinationLevel as CL,
    hconcat,
    vconcat,
    getInitialCoordinationScopePrefix,
} from '@vitessce/config';

function generateMoffitt2025() {
    const config = new VitessceConfig({
        schemaVersion: '1.0.16',
        name: 'Merfish',
    });
    const dataset = config.addDataset('My dataset').addFile({
        fileType: 'obsSets.csv',
        url: 'http://127.0.0.1:8081/mesh_celltype.csv',
        coordinationValues: {
            obsType: 'cell',
        },
        options: {
            obsIndex: 'cell_id',
            obsSets: [
                {
                    name: 'cluster',
                    column: 'cluster',
                },
            ],
        },
    });
    const obsSets = config.addView(dataset, 'obsSets', { x: 9, y: 0, w: 3, h: 6 });
    const neuroglancerView = config.addView(dataset, 'neuroglancer',{ x: 0, y: 0, w: 9, h: 6 } ).setProps({
        viewerState: {
            dimensions: {
                x: [
                    0.000001,
                    "m"
                ],
                y: [
                    0.000001,
                    "m"
                ],
                z: [
                    0.000013768,
                    "m"
                ]
            },
            position: [
                2860.5,
                4696.5,
                4.5
            ],
            crossSectionScale: 1,
            projectionOrientation: [
                -0.06777231395244598,
                0.0032991550397127867,
                0.000592421623878181,
                0.9976952075958252
            ],
            projectionScale: 12688.132735013756,
            layers: [
                {
                    type: 'segmentation',
                    source: 'precomputed://http://127.0.0.1:8081/mesh_mip_0_err_40_unsharded',
                    tab: 'segments',
                    objectAlpha: 0.5,
                    name: 'mesh_mip_0_err_40'
                },
                {
                    type: "annotation",
                    source: "precomputed://http://127.0.0.1:8081/molecule_baysor2",
                    tab: "source",
                    name: "molecule_baysor2",
                    shader: "// Converts HSV to RGB\nvec3 hsv2rgb(float h, float s, float v) {\n    float c = v * s;\n    float x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));\n    float m = v - c;\n    vec3 rgb;\n    \n    if (h < 1.0/6.0) {\n        rgb = vec3(c, x, 0.0);\n    } else if (h < 2.0/6.0) {\n        rgb = vec3(x, c, 0.0);\n    } else if (h < 3.0/6.0) {\n        rgb = vec3(0.0, c, x);\n    } else if (h < 4.0/6.0) {\n        rgb = vec3(0.0, x, c);\n    } else if (h < 5.0/6.0) {\n        rgb = vec3(x, 0.0, c);\n    } else {\n        rgb = vec3(c, 0.0, x);\n    }\n    return rgb + vec3(m);\n}\n\nvoid main() {\n    int gene = prop_gene(); // Your property function\n\n    vec4 color = vec4(0.925, 0.925, 0.925, 0.0); // Fully transparent by default\n\n    if (gene >= 0 && gene < 200) {\n        float hue = float(gene) / 200.0; // Distribute hues evenly\n        vec3 rgb = hsv2rgb(hue, 0.65, 0.95); // Saturation and brightness fixed\n        color = vec4(rgb, 1.0);\n    }\n\n    if (color.a < 0.01) {\n        discard;\n    }\n\n    setColor(color);\n}\n",
                },
            ],
            selectedLayer: {
                visible: true,
                layer: "mesh_mip_0_err_40"
            },
            layerListPanel: {
                "visible": true
            },
            layout: '3d',
        }
    });
    //config.layout(hconcat(neuroglancerView, vconcat(lcView, obsSets)));
    const configJSON = config.toJSON();
    return configJSON;
}

export const moffitt2025 = generateMoffitt2025();
