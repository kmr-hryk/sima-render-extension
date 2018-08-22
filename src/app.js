const iconv = require('iconv-lite');

Proj4js.defs['EPSG:2443'] =
  '+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2444'] =
  '+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2445'] =
  '+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2446'] =
  '+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2447'] =
  '+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2448'] =
  '+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2449'] =
  '+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2450'] =
  '+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2451'] =
  '+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2452'] =
  '+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2453'] =
  '+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2454'] =
  '+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2455'] =
  '+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2456'] =
  '+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2457'] =
  '+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2458'] =
  '+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2459'] =
  '+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2460'] =
  '+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:2461'] =
  '+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
Proj4js.defs['EPSG:6669'] =
  '+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6670'] =
  '+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6671'] =
  '+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6672'] =
  '+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6673'] =
  '+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6674'] =
  '+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6675'] =
  '+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6676'] =
  '+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6677'] =
  '+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6678'] =
  '+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6679'] =
  '+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6680'] =
  '+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6681'] =
  '+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6682'] =
  '+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6683'] =
  '+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6684'] =
  '+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6685'] =
  '+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6686'] =
  '+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';
Proj4js.defs['EPSG:6687'] =
  '+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs';

/*
変換コードのオリジナルは GitHub の sima2geojson.js より
https://github.com/KMR-zoar/sima2geojson.js
*/

//座標値の変換処理関数
//使っている Proj4 ライブラリが少し違うので書き換え
function translate(xy, epsg) {
  const epsgStr = 'EPSG:' + epsg;

  const newCoord = Proj4js.transform(
    new Proj4js.Proj(epsgStr),
    new Proj4js.Proj('EPSG:4326'),
    {
      x: xy[0],
      y: xy[1]
    }
  );

  return [newCoord.x, newCoord.y];
}

//点座標オブジェクトの作成
const createPointObject = (sima, epsg) => {
  const pointLine = sima.filter(item => {
    return item.match('^A01');
  });

  let pointObject = {};

  pointLine.forEach(line => {
    const splitedLine = line.split(',');

    const geometry = translate(
      [parseFloat(splitedLine[4]), parseFloat(splitedLine[3])],
      epsg
    );

    pointObject[splitedLine[1]] = geometry;
  });

  return pointObject;
};

//ポリゴンデータの作成
const createPolygonGeoJSON = (pointObjectArray, sima) => {
  const PolygonGeoJSON = {
    type: 'FeatureCollection',
    features: []
  };

  const regexp = new RegExp(/(D00[\s\S]*?D99,)/g);
  const targetPolygonArray = sima.match(regexp);

  if (!targetPolygonArray) {
    return false;
  }

  targetPolygonArray.forEach(polygonBlock => {
    const splittedBlock = polygonBlock.split('\n');

    let meta = {
      type: 'Feature',
      properties: {
        id: '',
        name: ''
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[]]
      }
    };

    splittedBlock.forEach(line => {
      const splittedLine = line.split(',');

      if (splittedLine[0] === 'D00') {
        meta.properties.id = splittedLine[1];
        meta.properties.name = splittedLine[2];
      }

      if (splittedLine[0] === 'B01') {
        meta.geometry.coordinates[0].push(pointObjectArray[splittedLine[1]]);
      }
    });

    meta.geometry.coordinates[0].push(meta.geometry.coordinates[0][0]);

    PolygonGeoJSON.features.push(meta);
  });

  return JSON.stringify(PolygonGeoJSON);
};

function convertSIMA2GeoJSON(dataSet, fname) {
  if (!fname.match(/.sim$/)) {
    return dataSet;
  } else {
    const epsg = $('#selectProjection option:selected').val();
    const buf = new Buffer(dataSet, 'binary');
    const sima = iconv.decode(buf, 'Shift_JIS');

    const simaSplitted = sima.split('\r\n');
    const po = createPointObject(simaSplitted, epsg);
    const geojson = createPolygonGeoJSON(po, sima);
    return geojson;
  }
}

window.convertSIMA2GeoJSON = convertSIMA2GeoJSON;
