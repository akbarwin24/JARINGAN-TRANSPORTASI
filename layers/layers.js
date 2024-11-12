ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3395").setExtent([15647777.988294, -545402.369258, 15659415.745977, -540290.361262]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WILAYAHADMINISTRASI_2 = new ol.format.GeoJSON();
var features_WILAYAHADMINISTRASI_2 = format_WILAYAHADMINISTRASI_2.readFeatures(json_WILAYAHADMINISTRASI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_WILAYAHADMINISTRASI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHADMINISTRASI_2.addFeatures(features_WILAYAHADMINISTRASI_2);
var lyr_WILAYAHADMINISTRASI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WILAYAHADMINISTRASI_2, 
                style: style_WILAYAHADMINISTRASI_2,
                popuplayertitle: "WILAYAH ADMINISTRASI",
                interactive: false,
                title: '<img src="styles/legend/WILAYAHADMINISTRASI_2.png" /> WILAYAH ADMINISTRASI'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_PERAIRAN_4 = new ol.format.GeoJSON();
var features_PERAIRAN_4 = format_PERAIRAN_4.readFeatures(json_PERAIRAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_PERAIRAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERAIRAN_4.addFeatures(features_PERAIRAN_4);
var lyr_PERAIRAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERAIRAN_4, 
                style: style_PERAIRAN_4,
                popuplayertitle: "PERAIRAN",
                interactive: true,
    title: 'PERAIRAN<br />\
    <img src="styles/legend/PERAIRAN_4_0.png" /> Badan Air<br />'
        });
var format_JARINGANJALAN_5 = new ol.format.GeoJSON();
var features_JARINGANJALAN_5 = format_JARINGANJALAN_5.readFeatures(json_JARINGANJALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_JARINGANJALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANJALAN_5.addFeatures(features_JARINGANJALAN_5);
var lyr_JARINGANJALAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANJALAN_5, 
                style: style_JARINGANJALAN_5,
                popuplayertitle: "JARINGAN JALAN",
                interactive: true,
    title: 'JARINGAN JALAN<br />\
    <img src="styles/legend/JARINGANJALAN_5_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JARINGANJALAN_5_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JARINGANJALAN_5_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JARINGANJALAN_5_3.png" /> Jalan Lingkungan<br />'
        });
var format_TRANSPORTASIUDARA_6 = new ol.format.GeoJSON();
var features_TRANSPORTASIUDARA_6 = format_TRANSPORTASIUDARA_6.readFeatures(json_TRANSPORTASIUDARA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_TRANSPORTASIUDARA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRANSPORTASIUDARA_6.addFeatures(features_TRANSPORTASIUDARA_6);
var lyr_TRANSPORTASIUDARA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRANSPORTASIUDARA_6, 
                style: style_TRANSPORTASIUDARA_6,
                popuplayertitle: "TRANSPORTASI UDARA",
                interactive: true,
    title: 'TRANSPORTASI UDARA<br />\
    <img src="styles/legend/TRANSPORTASIUDARA_6_0.png" /> Bandara<br />'
        });
var format_BATASADMINISTRASI_7 = new ol.format.GeoJSON();
var features_BATASADMINISTRASI_7 = format_BATASADMINISTRASI_7.readFeatures(json_BATASADMINISTRASI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_BATASADMINISTRASI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASADMINISTRASI_7.addFeatures(features_BATASADMINISTRASI_7);
var lyr_BATASADMINISTRASI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASADMINISTRASI_7, 
                style: style_BATASADMINISTRASI_7,
                popuplayertitle: "BATAS ADMINISTRASI",
                interactive: true,
    title: 'BATAS ADMINISTRASI<br />\
    <img src="styles/legend/BATASADMINISTRASI_7_0.png" /> Batas Distrik<br />\
    <img src="styles/legend/BATASADMINISTRASI_7_1.png" /> Batas Kampung<br />'
        });
var format_BATASBWP_8 = new ol.format.GeoJSON();
var features_BATASBWP_8 = format_BATASBWP_8.readFeatures(json_BATASBWP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_BATASBWP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASBWP_8.addFeatures(features_BATASBWP_8);
var lyr_BATASBWP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASBWP_8, 
                style: style_BATASBWP_8,
                popuplayertitle: "BATAS BWP",
                interactive: true,
    title: 'BATAS BWP<br />\
    <img src="styles/legend/BATASBWP_8_0.png" /> Batas WP<br />'
        });
var format_IBUKOTA_9 = new ol.format.GeoJSON();
var features_IBUKOTA_9 = format_IBUKOTA_9.readFeatures(json_IBUKOTA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_IBUKOTA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBUKOTA_9.addFeatures(features_IBUKOTA_9);
var lyr_IBUKOTA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBUKOTA_9, 
                style: style_IBUKOTA_9,
                popuplayertitle: "IBU KOTA",
                interactive: true,
    title: 'IBU KOTA<br />\
    <img src="styles/legend/IBUKOTA_9_0.png" /> Ibukota Kabupaten<br />\
    <img src="styles/legend/IBUKOTA_9_1.png" /> Ibukota Distrik<br />\
    <img src="styles/legend/IBUKOTA_9_2.png" /> Ibukota Kampung<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_WILAYAHADMINISTRASI_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_PERAIRAN_4.setVisible(true);lyr_JARINGANJALAN_5.setVisible(true);lyr_TRANSPORTASIUDARA_6.setVisible(true);lyr_BATASADMINISTRASI_7.setVisible(true);lyr_BATASBWP_8.setVisible(true);lyr_IBUKOTA_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ESRISatellite_1,lyr_WILAYAHADMINISTRASI_2,lyr_Sungai_3,lyr_PERAIRAN_4,lyr_JARINGANJALAN_5,lyr_TRANSPORTASIUDARA_6,lyr_BATASADMINISTRASI_7,lyr_BATASBWP_8,lyr_IBUKOTA_9];
lyr_WILAYAHADMINISTRASI_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LUAS_KM2': 'LUAS_KM2', 'LUAS_HA': 'LUAS_HA', });
lyr_Sungai_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'NAMA': 'NAMA', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', });
lyr_PERAIRAN_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'NAMA': 'NAMA', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_JARINGANJALAN_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'FUNGSI': 'FUNGSI', 'NAMA': 'NAMA', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', });
lyr_TRANSPORTASIUDARA_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN': 'KEGIATAN', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'GAMBAR': 'GAMBAR', });
lyr_BATASADMINISTRASI_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', });
lyr_BATASBWP_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', });
lyr_IBUKOTA_9.set('fieldAliases', {'IBUKOTA': 'IBUKOTA', });
lyr_WILAYAHADMINISTRASI_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'LUAS_KM2': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'NAMA': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_PERAIRAN_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'NAMA': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JARINGANJALAN_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'FUNGSI': 'TextEdit', 'NAMA': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_TRANSPORTASIUDARA_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'GAMBAR': 'ExternalResource', });
lyr_BATASADMINISTRASI_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_BATASBWP_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_IBUKOTA_9.set('fieldImages', {'IBUKOTA': 'TextEdit', });
lyr_WILAYAHADMINISTRASI_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'PROVINSI': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'DESA': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'LUAS_KM2': 'inline label - visible with data', 'LUAS_HA': 'inline label - visible with data', });
lyr_Sungai_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', });
lyr_PERAIRAN_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_JARINGANJALAN_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'FUNGSI': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', });
lyr_TRANSPORTASIUDARA_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS_UTAM': 'inline label - visible with data', 'JENIS': 'inline label - visible with data', 'KEGIATAN': 'inline label - visible with data', 'TOPONIM': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'GAMBAR': 'inline label - visible with data', });
lyr_BATASADMINISTRASI_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', });
lyr_BATASBWP_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', });
lyr_IBUKOTA_9.set('fieldLabels', {'IBUKOTA': 'inline label - visible with data', });
lyr_IBUKOTA_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});