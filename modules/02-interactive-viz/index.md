---
authors:
  - name: "Qiusheng Wu"
    affiliations:
      - "University of Tennessee, Knoxville"
    email: "qwu18@utk.edu"
    orcid: "0000-0001-5437-4073"
    github: "giswqs"
---

# 👁️ 2 - Interactive visualization of raster and vector data

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/opengeos/leafmap/blob/master/docs/workshops/AGU_2025.ipynb)

## Introduction

This notebook is for the workshop ([Open Source Geospatial Workflows in the Cloud](https://geojupyter.github.io/workshop-open-source-geospatial)) presented at the [AGU Fall Meeting 2025](https://agu.confex.com/agu/agu25/meetingapp.cgi/Session/252640).

### Learning Objectives

By the end of this workshop, you will be able to:

- Create interactive maps with MapLibre using Python
- Add and customize various data layers (raster, vector, 3D)
- Visualize remote sensing data including COGs, STAC, and local rasters
- Work with PMTiles for efficient vector tile rendering
- Create 3D visualizations including terrain, buildings, and indoor maps
- Use TiTiler for dynamic raster tile serving
- Apply custom styling and legends to enhance map readability

## Useful Resources

- [MapLibre GL JS Documentation](https://maplibre.org/maplibre-gl-js/docs): Comprehensive documentation for MapLibre GL JS.
- [MapLibre Python Bindings](https://github.com/eoda-dev/py-maplibregl): Information on using MapLibre with Python.
- [MapLibre in Leafmap](https://leafmap.org/maplibre/overview): Examples and tutorials for MapLibre in Leafmap.
- [Video Tutorials](https://bit.ly/maplibre): Video guides for practical MapLibre skills.
- [MapLibre Demos](https://maps.gishub.org): Interactive demos showcasing MapLibre's capabilities.

## Table of Contents

- [👁️ 2 - Interactive visualization of raster and vector data](#️-2---interactive-visualization-of-raster-and-vector-data)
  - [Introduction](#introduction)
    - [Learning Objectives](#learning-objectives)
  - [Useful Resources](#useful-resources)
  - [Table of Contents](#table-of-contents)
  - [Installation and Setup](#installation-and-setup)
  - [Creating Interactive Maps](#creating-interactive-maps)
    - [Basic Map Setup](#basic-map-setup)
    - [Customizing the Map's Center and Zoom Level](#customizing-the-maps-center-and-zoom-level)
    - [Choosing a Basemap Style](#choosing-a-basemap-style)
  - [Adding Map Controls](#adding-map-controls)
    - [Available Controls](#available-controls)
    - [Adding Geolocate Control](#adding-geolocate-control)
    - [Adding Fullscreen Control](#adding-fullscreen-control)
    - [Adding Navigation Control](#adding-navigation-control)
    - [Adding Draw Control](#adding-draw-control)
  - [Adding Layers](#adding-layers)
    - [Adding Basemaps](#adding-basemaps)
    - [Adding XYZ Tile Layer](#adding-xyz-tile-layer)
    - [Adding WMS Layer](#adding-wms-layer)
  - [3D Terrain](#3d-terrain)
    - [3D Buildings](#3d-buildings)
    - [3D Indoor Mapping](#3d-indoor-mapping)
  - [Visualizing Vector Data](#visualizing-vector-data)
    - [Point Data](#point-data)
    - [Line Data](#line-data)
    - [Polygon Data](#polygon-data)
  - [Visualizing Remote Sensing Data](#visualizing-remote-sensing-data)
    - [Local Raster Data](#local-raster-data)
    - [Cloud Optimized GeoTIFF (COG)](#cloud-optimized-geotiff-cog)
    - [STAC Layer](#stac-layer)
    - [Adding HTML](#adding-html)
  - [Adding Components to the Map](#adding-components-to-the-map)
    - [Adding Color bar](#adding-color-bar)
    - [Adding Legend](#adding-legend)
    - [Adding Video](#adding-video)
  - [PMTiles](#pmtiles)
    - [Building Footprint Data](#building-footprint-data)
    - [Fields of The World](#fields-of-the-world)
    - [3D PMTiles](#3d-pmtiles)
  - [H3 Hexagonal Grid](#h3-hexagonal-grid)
  - [Summary and Best Practices](#summary-and-best-practices)
    - [Key Takeaways](#key-takeaways)
    - [Next Steps](#next-steps)

## Installation and Setup

To install the required packages, uncomment and run the line below.

```{code-cell} ipython3
# %pip install -U leafmap
```

Once installed, import the `maplibregl` backend from the `leafmap` package:

```{code-cell} ipython3
import leafmap.maplibregl as leafmap
```

## Creating Interactive Maps

### Basic Map Setup

Let’s start by creating a simple interactive map with default settings. This basic setup provides a simple map with the `dark-matter` style on which you can add data layers, controls, and other customizations.

```{code-cell} ipython3
m = leafmap.Map()
m
```

### Customizing the Map's Center and Zoom Level

You can specify the map’s center (latitude and longitude), zoom level, pitch, and bearing for a more focused view. These parameters help direct the user's attention to specific areas.

```{code-cell} ipython3
m = leafmap.Map(center=[-100, 40], zoom=2, pitch=0, bearing=0, projection="globe")
m
```

### Choosing a Basemap Style

MapLibre supports several pre-defined basemap styles such as `dark-matter`, `positron`, `voyager`, `liberty`, `demotiles`. You can also use custom basemap URLs for unique styling.

```{code-cell} ipython3
m = leafmap.Map(style="positron")
m
```

[OpenFreeMap](https://openfreemap.org) provides a variety of basemap styles that you can use in your interactive maps. These styles include `liberty`, `bright`, and `positron`.

```{code-cell} ipython3
m = leafmap.Map(style="liberty")
m
```

## Adding Map Controls

Map controls enhance the usability of the map by allowing users to interact in various ways, adding elements like scale bars, zoom tools, and drawing options.

### Available Controls

- **Geolocate**: Centers the map based on the user’s current location, if available.
- **Fullscreen**: Expands the map to a full-screen view for better focus.
- **Navigation**: Provides zoom controls and a compass for reorientation.
- **Draw**: Allows users to draw and edit shapes on the map.

### Adding Geolocate Control

The Geolocate control centers the map based on the user’s current location, a helpful feature for location-based applications.

```{code-cell} ipython3
m = leafmap.Map()
m.add_control("geolocate", position="top-right")
m
```

### Adding Fullscreen Control

Fullscreen control enables users to expand the map to full screen, enhancing focus and visual clarity. This is especially useful when viewing complex or large datasets.

```{code-cell} ipython3
m = leafmap.Map(center=[11.255, 43.77], zoom=13, style="positron", controls={})
m.add_control("fullscreen", position="top-right")
m
```

### Adding Navigation Control

The Navigation control provides buttons for zooming and reorienting the map, improving the user's ability to navigate efficiently.

```{code-cell} ipython3
m = leafmap.Map(center=[11.255, 43.77], zoom=13, style="positron", controls={})
m.add_control("navigation", position="top-right")
m
```

### Adding Draw Control

The Draw control enables users to interact with the map by adding shapes such as points, lines, and polygons. This control is essential for tasks requiring spatial data input directly on the map.

```{code-cell} ipython3
m = leafmap.Map(center=[-100, 40], zoom=3, style="positron")
m.add_draw_control(position="top-right")
m
```

Two key methods for accessing drawn features:

- **Selected Features**: Accesses only the currently selected features.
- **All Features**: Accesses all features added, regardless of selection, giving you full control over the spatial data on the map.

```{code-cell} ipython3
m.draw_features_selected
```

```{code-cell} ipython3
m.draw_feature_collection_all
```

## Adding Layers

Adding layers to a map enhances the data it presents, allowing different types of basemaps, tile layers, and thematic overlays to be combined for in-depth analysis.

### Adding Basemaps

Basemaps provide a geographical context for the map. Using the `add_basemap` method, you can select from various basemaps, including `OpenTopoMap` and `Esri.WorldImagery`. Adding a layer control allows users to switch between multiple basemaps interactively.

```{code-cell} ipython3
m = leafmap.Map()
m.add_basemap("OpenTopoMap")
m
```

```{code-cell} ipython3
m.add_basemap("Esri.WorldImagery")
```

You can also add basemaps interactively, which provides flexibility for selecting the best background for your map content.

```{code-cell} ipython3
m = leafmap.Map()
m
```

```{code-cell} ipython3
m.add_basemap()
```

### Adding XYZ Tile Layer

XYZ tile layers allow integration of specific tile services like topographic, satellite, or other thematic imagery from XYZ tile servers. By specifying the URL and parameters such as `opacity` and `visibility`, XYZ layers can be customized and styled to fit the needs of your map.

```{code-cell} ipython3
m = leafmap.Map()
url = "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
m.add_tile_layer(url, name="USGS Topo", attribution="USGS", opacity=1.0, visible=True)
m
```

### Adding WMS Layer

Web Map Service (WMS) layers provide access to external datasets served by web servers, such as thematic maps or detailed satellite imagery. Adding a WMS layer involves specifying the WMS URL and layer names, which allows for overlaying various data types such as natural imagery or land cover classifications.

```{code-cell} ipython3
m = leafmap.Map(center=[-74.5447, 40.6892], zoom=8, style="liberty")
url = "https://img.nj.gov/imagerywms/Natural2015"
layers = "Natural2015"
m.add_wms_layer(url, layers=layers, before_id="aeroway_fill")

m
```

```{code-cell} ipython3
m = leafmap.Map(center=[-100.307965, 46.98692], zoom=13, pitch=45, style="liberty")
m.add_basemap("Esri.WorldImagery")
url = "https://fwspublicservices.wim.usgs.gov/wetlandsmapservice/services/Wetlands/MapServer/WMSServer"
m.add_wms_layer(url, layers="1", name="NWI", opacity=0.6)
m.add_legend(builtin_legend="NWI", title="Wetland Type")
m
```

## 3D Terrain

To visualize 3D terrain, you can use the `set_terrain` method.

```{code-cell} ipython3
m = leafmap.Map(
    center=[-122.1874314, 46.2022386],
    zoom=13,
    pitch=60,
    bearing=220,
    projection="globe",
)
m.add_basemap("Esri.WorldImagery")
m.set_terrain()
m
```

### 3D Buildings

Adding 3D buildings enhances urban visualizations, showing buildings with height variations. The setup involves specifying the MapTiler API key for vector tiles and adding building data as a 3D extrusion layer. The extrusion height and color can be set based on data attributes to visualize structures with varying heights, which can be useful in city planning and urban analysis.

```{code-cell} ipython3
m = leafmap.Map(
    center=[-74.01201, 40.70473],
    zoom=16,
    pitch=60,
    bearing=35,
)
m.add_basemap("Esri.WorldImagery", visible=False)
m.add_overture_3d_buildings()
m
```

### 3D Indoor Mapping

Indoor mapping data can be visualized by loading a GeoJSON file and applying the `add_geojson` method. This setup allows for displaying floorplans with attributes such as color, height, and opacity. It provides a realistic indoor perspective, which is useful for visualizing complex structures or navigating interior spaces.

```{code-cell} ipython3
data = "https://maplibre.org/maplibre-gl-js/docs/assets/indoor-3d-map.geojson"
gdf = leafmap.geojson_to_gdf(data)
gdf.explore()
```

```{code-cell} ipython3
gdf.head()
```

```{code-cell} ipython3
m = leafmap.Map(
    center=(-87.61694, 41.86625), zoom=17, pitch=40, bearing=20, style="positron"
)
m.add_basemap("OpenStreetMap.Mapnik")
m.add_geojson(
    data,
    layer_type="fill-extrusion",
    name="floorplan",
    paint={
        "fill-extrusion-color": ["get", "color"],
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-base": ["get", "base_height"],
        "fill-extrusion-opacity": 0.5,
    },
)
m
```

## Visualizing Vector Data

Leafmap supports visualizing vector data using the `add_vector` method. This method allows you to add vector data to the map, which can be used to display features like points, lines, and polygons.

+++

### Point Data

```{code-cell} ipython3
url = (
    "https://github.com/opengeos/datasets/releases/download/world/world_cities.geojson"
)
m = leafmap.Map(style="liberty", projection="globe")
m.add_vector(url, name="cities")
m.add_popup("cities")
m
```

### Line Data

```{code-cell} ipython3
url = "https://data.gishub.org/duckdb/cables.geojson"
m = leafmap.Map(style="liberty", projection="globe")
m.add_vector(url, name="cables")
m.add_popup("cables")
m
```

### Polygon Data

```{code-cell} ipython3
m = leafmap.Map(style="liberty", projection="globe")
data = "https://github.com/opengeos/datasets/releases/download/vector/countries.geojson"
m.add_data(
    data,
    column="POP_EST",
    scheme="Quantiles",
    cmap="Blues",
    legend_title="Population",
    name="Population",
    before_id=m.first_symbol_layer_id,
    extrude=True,
    scale_factor=1000,
)
m
```

## Visualizing Remote Sensing Data

### Local Raster Data

To visualize local raster files, use the `add_raster` method. In the example, a Landsat image is downloaded and displayed using two different band combinations:

- **Band Combination 3-2-1 (True Color)**: Simulates natural colors in the RGB channels.
- **Band Combination 4-3-2**: Enhances vegetation, displaying it in red for better visual contrast.
  These layers are added to the map along with controls to toggle them. You can adjust brightness and contrast with the `vmin` and `vmax` arguments to improve clarity.

```{code-cell} ipython3
url = "https://github.com/opengeos/datasets/releases/download/raster/landsat.tif"
filepath = "landsat.tif"
leafmap.download_file(url, filepath, quiet=True)
```

```{code-cell} ipython3
m = leafmap.Map(style="streets")
m.add_raster(filepath, indexes=[3, 2, 1], vmin=0, vmax=100, name="Landsat-321")
m.add_raster(filepath, indexes=[4, 3, 2], vmin=0, vmax=100, name="Landsat-432")
m
```

A Digital Elevation Model (DEM) is also downloaded and visualized with a terrain color scheme. Leafmap’s `layer_interact` method allows interactive adjustments.

```{code-cell} ipython3
url = "https://github.com/opengeos/datasets/releases/download/raster/srtm90.tif"
filepath = "srtm90.tif"
leafmap.download_file(url, filepath, quiet=True)
```

```{code-cell} ipython3
m = leafmap.Map(style="liberty")
m.add_raster(filepath, colormap="terrain", name="DEM")
m
```

### Cloud Optimized GeoTIFF (COG)

Cloud Optimized GeoTIFFs (COG) are large raster files stored on cloud platforms, allowing efficient streaming and loading. This example loads satellite imagery of Libya before and after an event, showing the change over time. Each image is loaded with `add_cog_layer`, and layers can be toggled for comparison. Using `fit_bounds`, the map centers on the COG layer to fit its boundaries.

**Best Practices for Working with COGs:**

- Use COGs for large raster datasets to enable fast, partial data loading
- Store COGs on cloud storage (AWS S3, Google Cloud Storage, Azure) for optimal performance
- Apply appropriate `rescale` values to optimize visualization contrast
- Use `nodata` parameter to handle missing data values correctly
- Leverage `fit_bounds=True` to automatically zoom to your data extent

```{code-cell} ipython3
m = leafmap.Map(style="liberty")
before = (
    "https://github.com/opengeos/datasets/releases/download/raster/Libya-2023-07-01.tif"
)
after = (
    "https://github.com/opengeos/datasets/releases/download/raster/Libya-2023-09-13.tif"
)
m.add_cog_layer(before, name="Before", attribution="Maxar")
m.add_cog_layer(after, name="After", attribution="Maxar", fit_bounds=True)
m
```

### STAC Layer

The SpatioTemporal Asset Catalog (STAC) standard organizes large satellite data collections. With `add_stac_layer`, this example loads Canadian satellite data, displaying both a panchromatic and an RGB layer from the same source. This approach allows easy switching between views.

```{code-cell} ipython3
m = leafmap.Map(style="streets")
url = "https://canada-spot-ortho.s3.amazonaws.com/canada_spot_orthoimages/canada_spot5_orthoimages/S5_2007/S5_11055_6057_20070622/S5_11055_6057_20070622.json"
m.add_stac_layer(url, bands=["pan"], name="Panchromatic", vmin=0, vmax=150)
m.add_stac_layer(url, bands=["B4", "B3", "B2"], name="RGB", vmin=0, vmax=150)
m
```

### Adding HTML

Embed custom HTML content to display various HTML elements, such as emojis or stylized text. You can also adjust the font size and background transparency for better integration into the map design.

```{code-cell} ipython3
m = leafmap.Map(center=[-100, 40], zoom=3, style="positron")
html = """
<html>
<style>
body {
  font-size: 20px;
}
</style>
<body>

<span style='font-size:100px;'>&#128640;</span>
<p>I will display &#128641;</p>
<p>I will display &#128642;</p>

</body>
</html>
"""
m.add_html(html, bg_color="transparent")
m
```

## Adding Components to the Map

### Adding Color bar

Adding a color bar enhances data interpretation. In the example:

1. A Digital Elevation Model (DEM) is displayed with a color ramp from 0 to 1500 meters.
2. `add_colorbar` method is used to create a color bar with labels, adjusting its position, opacity, and orientation for optimal readability.

```{code-cell} ipython3
import numpy as np
```

```{code-cell} ipython3
m = leafmap.Map(style="liberty")
dem = "https://github.com/opengeos/datasets/releases/download/raster/dem.tif"
m.add_cog_layer(
    dem,
    name="DEM",
    colormap_name="terrain",
    rescale="0, 1500",
    fit_bounds=True,
    nodata=np.nan,
)
m.add_colorbar(
    cmap="terrain", vmin=0, vmax=1500, label="Elevation (m)", position="bottom-right"
)

m
```

Make the color bar background transparent to blend seamlessly with the map.

```{code-cell} ipython3
m = leafmap.Map(style="liberty")
m.add_cog_layer(
    dem,
    name="DEM",
    colormap_name="terrain",
    rescale="0, 1500",
    nodata=np.nan,
    fit_bounds=True,
)
m.add_colorbar(
    cmap="terrain",
    vmin=0,
    vmax=1500,
    label="Elevation (m)",
    position="bottom-right",
    transparent=True,
)
m
```

Make the color bar vertical for a different layout.

```{code-cell} ipython3
m = leafmap.Map(style="liberty")
m.add_cog_layer(
    dem,
    name="DEM",
    colormap_name="terrain",
    rescale="0, 1500",
    nodata=np.nan,
    fit_bounds=True,
)
m.add_colorbar(
    cmap="terrain",
    vmin=0,
    vmax=1500,
    label="Elevation (m)",
    position="bottom-right",
    width=0.2,
    height=3,
    orientation="vertical",
)
m
```

### Adding Legend

Custom legends help users understand data classifications. Two methods are shown:

1. Using built-in legends, such as for NLCD (National Land Cover Database) or wetland types.
2. Custom legends are built with a dictionary of land cover types and colors. This legend provides descriptive color-coding for various land cover types, with configurable background opacity to blend with the map.

```{code-cell} ipython3
m = leafmap.Map(center=[-100, 40], zoom=3, style="positron")
m.add_basemap("Esri.WorldImagery")
url = "https://www.mrlc.gov/geoserver/mrlc_display/NLCD_2021_Land_Cover_L48/wms"
layers = "NLCD_2021_Land_Cover_L48"
m.add_wms_layer(url, layers=layers, name="NLCD 2021")
m.add_legend(
    title="NLCD Land Cover Type",
    builtin_legend="NLCD",
    bg_color="rgba(255, 255, 255, 0.5)",
    position="bottom-left",
)
m
```

```{code-cell} ipython3
m = leafmap.Map(center=[-100, 40], zoom=3, style="positron")
m.add_basemap("Esri.WorldImagery")
url = "https://fwspublicservices.wim.usgs.gov/wetlandsmapservice/services/Wetlands/MapServer/WMSServer"
m.add_wms_layer(url, layers="1", name="NWI", opacity=0.6)
m.add_legend(builtin_legend="NWI", title="Wetland Type")
m
```

```{code-cell} ipython3
m = leafmap.Map(center=[-100, 40], zoom=3, style="positron")
m.add_basemap("Esri.WorldImagery")
url = "https://www.mrlc.gov/geoserver/mrlc_display/NLCD_2021_Land_Cover_L48/wms"
layers = "NLCD_2021_Land_Cover_L48"
m.add_wms_layer(url, layers=layers, name="NLCD 2021")

legend_dict = {
    "11 Open Water": "466b9f",
    "12 Perennial Ice/Snow": "d1def8",
    "21 Developed, Open Space": "dec5c5",
    "22 Developed, Low Intensity": "d99282",
    "23 Developed, Medium Intensity": "eb0000",
    "24 Developed High Intensity": "ab0000",
    "31 Barren Land (Rock/Sand/Clay)": "b3ac9f",
    "41 Deciduous Forest": "68ab5f",
    "42 Evergreen Forest": "1c5f2c",
    "43 Mixed Forest": "b5c58f",
    "51 Dwarf Scrub": "af963c",
    "52 Shrub/Scrub": "ccb879",
    "71 Grassland/Herbaceous": "dfdfc2",
    "72 Sedge/Herbaceous": "d1d182",
    "73 Lichens": "a3cc51",
    "74 Moss": "82ba9e",
    "81 Pasture/Hay": "dcd939",
    "82 Cultivated Crops": "ab6c28",
    "90 Woody Wetlands": "b8d9eb",
    "95 Emergent Herbaceous Wetlands": "6c9fb8",
}
m.add_legend(
    title="NLCD Land Cover Type",
    legend_dict=legend_dict,
    bg_color="rgba(255, 255, 255, 0.5)",
    position="bottom-left",
)
m
```

### Adding Video

Videos can be added with geographic context by specifying corner coordinates. Videos must be listed in multiple formats to ensure compatibility across browsers. The coordinates array should define the video’s location on the map in the order: top-left, top-right, bottom-right, and bottom-left. This is demonstrated by adding drone footage to a satellite map view, enhancing the user experience with real-world visuals.

```{code-cell} ipython3
m = leafmap.Map(center=[-122.514426, 37.562984], zoom=17, bearing=-96, style="liberty")
m.add_basemap("Esri.WorldImagery")
urls = [
    "https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4",
    "https://static-assets.mapbox.com/mapbox-gl-js/drone.webm",
]
coordinates = [
    [-122.51596391201019, 37.56238816766053],
    [-122.51467645168304, 37.56410183312965],
    [-122.51309394836426, 37.563391708549425],
    [-122.51423120498657, 37.56161849366671],
]
m.add_video(urls, coordinates)
m
```

```{code-cell} ipython3
m = leafmap.Map(center=[-115, 25], zoom=4, style="liberty")
m.add_basemap("Esri.WorldImagery")
urls = [
    "https://data.opengeos.org/patricia_nasa.mp4",
    "https://data.opengeos.org/patricia_nasa.webm",
]
coordinates = [
    [-130, 32],
    [-100, 32],
    [-100, 13],
    [-130, 13],
]
m.add_video(urls, coordinates)
m
```

## PMTiles

Leafmap supports visualizing [PMTiles](https://protomaps.com/docs/pmtiles/), which enables efficient storage and fast rendering of vector tiles directly in the browser.

**Why PMTiles?**

- Single-file archive format for vector tiles (no server-side processing needed)
- Efficient range request support for cloud-native applications
- Significantly faster than traditional tile servers for static datasets
- Can be hosted on any static file server or cloud storage
- Ideal for large-scale building footprints, field boundaries, and other vector data

+++

### Building Footprint Data

Visualize the [Google-Microsoft Open Buildings dataset](https://beta.source.coop/repositories/vida/google-microsoft-open-buildings/description), managed by VIDA, in PMTiles format. Fetch metadata to identify available layers, apply custom styles to the building footprints, and render them with semi-transparent colors for a clear visualization.

```{code-cell} ipython3
url = "https://data.source.coop/vida/google-microsoft-open-buildings/pmtiles/go_ms_building_footprints.pmtiles"
metadata = leafmap.pmtiles_metadata(url)
print(f"layer names: {metadata['layer_names']}")
print(f"bounds: {metadata['bounds']}")
```

```{code-cell} ipython3
m = leafmap.Map(center=[0, 20], zoom=2)
m.add_basemap("Esri.WorldImagery", visible=False)

style = {
    "version": 8,
    "sources": {
        "example_source": {
            "type": "vector",
            "url": "pmtiles://" + url,
            "attribution": "PMTiles",
        }
    },
    "layers": [
        {
            "id": "buildings",
            "source": "example_source",
            "source-layer": "building_footprints",
            "type": "fill",
            "paint": {"fill-color": "#3388ff", "fill-opacity": 0.5},
        },
    ],
}

# style = leafmap.pmtiles_style(url)  # Use default style

m.add_pmtiles(
    url,
    style=style,
    visible=True,
    opacity=1.0,
    tooltip=True,
)
m
```

### Fields of The World

Visualize the Agricultural Field Boundary dataset - Fields of The World ([FTW](https://fieldsofthe.world)). The dataset is available on Source Cooperative at https://source.coop/repositories/kerner-lab/fields-of-the-world/description.

```{code-cell} ipython3
url = "https://data.source.coop/kerner-lab/fields-of-the-world/ftw-sources.pmtiles"
metadata = leafmap.pmtiles_metadata(url)
print(f"layer names: {metadata['layer_names']}")
print(f"bounds: {metadata['bounds']}")
```

```{code-cell} ipython3
m = leafmap.Map()
# Define colors for each last digit (0-9)
style = {
    "layers": [
        {
            "id": "Field Polygon",
            "source": "example_source",
            "source-layer": "ftw-sources",
            "type": "fill",
            "paint": {
                "fill-color": [
                    "case",
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 0],
                    "#FF5733",  # Color for last digit 0
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 1],
                    "#33FF57",  # Color for last digit 1
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 2],
                    "#3357FF",  # Color for last digit 2
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 3],
                    "#FF33A1",  # Color for last digit 3
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 4],
                    "#FF8C33",  # Color for last digit 4
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 5],
                    "#33FFF6",  # Color for last digit 5
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 6],
                    "#A833FF",  # Color for last digit 6
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 7],
                    "#FF333D",  # Color for last digit 7
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 8],
                    "#33FFBD",  # Color for last digit 8
                    ["==", ["%", ["to-number", ["get", "id"]], 10], 9],
                    "#FF9933",  # Color for last digit 9
                    "#FF0000",  # Fallback color if no match
                ],
                "fill-opacity": 0.5,
            },
        },
        {
            "id": "Field Outline",
            "source": "example_source",
            "source-layer": "ftw-sources",
            "type": "line",
            "paint": {"line-color": "#ffffff", "line-width": 1, "line-opacity": 1},
        },
    ],
}

m.add_basemap("Satellite")
m.add_pmtiles(url, style=style, name="FTW", zoom_to_layer=False)
m
```

```{code-cell} ipython3
m = leafmap.Map()
style = {
    "layers": [
        {
            "id": "Field Polygon",
            "source": "example_source",
            "source-layer": "ftw-sources",
            "type": "fill",
            "paint": {
                "fill-color": "#ffff00",
                "fill-opacity": 0.2,
            },
        },
        {
            "id": "Field Outline",
            "source": "example_source",
            "source-layer": "ftw-sources",
            "type": "line",
            "paint": {"line-color": "#ff0000", "line-width": 1, "line-opacity": 1},
        },
    ],
}

m.add_basemap("Satellite")
m.add_pmtiles(url, style=style, name="FTW", zoom_to_layer=False)
m
```

### 3D PMTiles

Render global building data in 3D for a realistic, textured experience. Set building colors and extrusion heights to create visually compelling cityscapes. For example, apply color gradients and height scaling based on building attributes to differentiate buildings by their heights.

```{code-cell} ipython3
url = "https://data.source.coop/cholmes/overture/overture-buildings.pmtiles"
metadata = leafmap.pmtiles_metadata(url)
print(f"layer names: {metadata['layer_names']}")
print(f"bounds: {metadata['bounds']}")
```

```{code-cell} ipython3
m = leafmap.Map(
    center=[-74.0095, 40.7046], zoom=16, pitch=60, bearing=-17, style="positron"
)
m.add_basemap("OpenStreetMap.Mapnik")
m.add_basemap("Esri.WorldImagery", visible=False)

style = {
    "layers": [
        {
            "id": "buildings",
            "source": "example_source",
            "source-layer": "buildings",
            "type": "fill-extrusion",
            "filter": [
                ">",
                ["get", "height"],
                0,
            ],  # only show buildings with height info
            "paint": {
                "fill-extrusion-color": [
                    "interpolate",
                    ["linear"],
                    ["get", "height"],
                    0,
                    "lightgray",
                    200,
                    "royalblue",
                    400,
                    "lightblue",
                ],
                "fill-extrusion-height": ["*", ["get", "height"], 1],
            },
        },
    ],
}

m.add_pmtiles(
    url,
    style=style,
    visible=True,
    opacity=1.0,
    tooltip=True,
    template="Height: {{height}}<br>Country: {{country_iso}}",
    fit_bounds=False,
)

m
```

## H3 Hexagonal Grid

[H3](https://h3geo.org) is a hexagonal grid system that provides a way to represent and analyze geospatial data in a hexagonal grid. It is a popular choice for visualizing and analyzing geospatial data, especially for large datasets.

```{code-cell} ipython3
url = "https://data.gishub.org/duckdb/h3_res4_geo.parquet"
gdf = leafmap.read_vector(url)
gdf
```

```{code-cell} ipython3
m = leafmap.Map()
m.add_basemap("Esri.WorldImagery", before_id=m.first_symbol_layer_id, visible=False)
m.add_data(
    gdf,
    column="building_count",
    scheme="JenksCaspall",
    cmap="inferno",
    outline_color="rgba(255, 255, 255, 0)",
    name="H3 Hexagon",
    before_id=m.first_symbol_layer_id,
)
m
```

```{code-cell} ipython3
m = leafmap.Map(center=[7.062832, -4.144790], pitch=45.5, zoom=1.57)
m.add_basemap("Esri.WorldImagery", before_id=m.first_symbol_layer_id, visible=False)
m.add_data(
    gdf,
    column="building_count",
    scheme="JenksCaspall",
    cmap="inferno",
    outline_color="rgba(255, 255, 255, 0)",
    name="H3 Hexagon",
    before_id=m.first_symbol_layer_id,
    extrude=True,
    fit_bounds=False,
)
m
```

## Summary and Best Practices

Congratulations! You've learned how to create interactive geospatial visualizations using Leafmap with MapLibre GL JS. This workshop covered:

- **Map Creation**: Setting up interactive maps with customizable styles and projections
- **Data Visualization**: Working with raster data (local files, COGs, STAC), vector data (GeoJSON, PMTiles), and 3D visualizations
- **Dynamic Tile Serving**: Using TiTiler for on-demand raster tile generation
- **Advanced Features**: Adding controls, legends, color bars, and custom HTML elements

### Key Takeaways

1. **Choose the Right Format**:

   - Use COGs for large raster datasets in cloud storage
   - Use PMTiles for vector data (buildings, boundaries, points of interest)
   - Use TiTiler when you need dynamic rendering with custom parameters
   - Use STAC for organized collections of geospatial assets

2. **Performance Optimization**:

   - Leverage cloud-native formats (COG, PMTiles) for better performance
   - Use appropriate zoom levels and bounds to limit data loading
   - Apply data rescaling and color mapping efficiently
   - Consider using `before_id` parameter to control layer ordering

3. **Visualization Best Practices**:

   - Add legends and color bars to make your maps interpretable
   - Use appropriate color schemes for your data type (sequential, diverging, categorical)
   - Leverage 3D visualizations (terrain, buildings) when appropriate
   - Combine multiple basemaps and layers for comprehensive analysis

4. **Interactive Features**:
   - Add drawing controls for user interaction
   - Enable tooltips to display attribute information
   - Use layer controls to toggle between datasets
   - Implement fullscreen and navigation controls for better UX

### Next Steps

To continue learning:

- Explore the [Leafmap documentation](https://leafmap.org) for more examples
- Check out [MapLibre GL JS documentation](https://maplibre.org/maplibre-gl-js/docs) for advanced styling
- Visit [Source Cooperative](https://source.coop) for more open geospatial datasets
- Experiment with custom styling using MapLibre style specifications

Happy mapping!
