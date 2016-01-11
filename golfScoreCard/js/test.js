/**
 * Created by brandon_overy on 10/29/15.
 */
QUnit.test( "centerMap is returning correct values", function( assert ) {
    console.log("running test");
    assert.ok(JSON.stringify(centerMap({"lat": 5, "lng": 3}, [{"lat": 4, "lng": 2},{"lat": 0, "lng": 0}])) == JSON.stringify({"lat": 4.5, "lng": 2.5}), "Passed!" );
});

