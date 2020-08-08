# bgd-waterquality

# Overview

This map visualizes data from the <a href="https://www.bgs.ac.uk/research/groundwater/health/arsenic/Bangladesh/data.html" target="_blank">British Geological Survey (BGS)</a> about water quality in Bangladesh.

# Summary of Datasets Used

* Point Data: <a href="https://www.bgs.ac.uk/downloads/start.cfm?id=2214" target="_blank">DPHE/BGS National Hydrochemical Survey</a>
* Polygon Data: <a href="https://biogeo.ucdavis.edu/data/gadm3.6/shp/gadm36_BGD_shp.zip" target="_blank">Bangladesh administrative boundaries - GADM v 3.6</a>

# Dataset Processing

The specific dataset used in this map is called <a href="https://www.bgs.ac.uk/downloads/start.cfm?id=2214" target="_blank">DPHE/BGS National Hydrochemical Survey</a> and is available as a csv file, 850 KB.

![Website overview](images/BGSWebsite_DataSource.png)

The BGS website has lots of maps and information about the dataset. The goal for this current map is to make an interactive site that displays some of the specific information for each sampled borehole.


The dataset needs to be edited before loading into a map. The original csv file has some very helpful metadata information that we can move out of the document.

![Website overview](images/DatasetExample.png)

The dataset information in the header is:

```
BGS,  DFID,  DPHE
Groundwater Studies of Arsenic Contamination in Bangladesh
National Survey Data
Release date: 25 May 2000
```

We can also reduce the spacing between the column headers and the dataset.

![Website overview](images/EditedDatasetExample.png)

These changes were made in a spreadsheet application and were not made using a command line approach. 

The column header information has been combined, for example WELL_DEPTH_m now contains the information about meter depth (m) within the column header.

Another piece to note is the Division, District, Thana, Union, and Mouza administrative unit information for each sample. This information will be helpful for a merge that we'll try once we collect the shapefiles.

This dataset does have latitude and longitude data already available (in WGS 84), so maps could be made using the point data. For the purposes of this map, we'll add in some polygon data described in the next section.

# Polygon Data

The site <a href="https://gadm.org" target="_blank">GADM</a> has administrative unit polygons available for countries. Navigating to the data <a href="https://gadm.org/download_country_v3.html" target="_blank">download page</a> provides access to the Bangladesh dataset.

![Website overview](images/GADM_Menu.png)

Selecting this option displays this page.

![Website overview](images/GADM_Bangladesh.png)

There are five administrative levels listed. Level-0 corresponds to the country outline.

This is the direct link for the <a href="https://biogeo.ucdavis.edu/data/gadm3.6/shp/gadm36_BGD_shp.zip" target="_blank">Bangladesh shapefile zip folder</a>.

The zip folder is over 68 MB in size and this file size may be difficult to map all at once.

```
cd data
ls -li
```

![Website overview](images/ZipfileSize.png)

# Polygon Processing

Several editing steps were needed for this original zip file.




# Key commands used

Much of the data processing was conducted using the command line. Some of the commands used are described below.

```
mkdir <name>
```
This command was used to create directories (folders) after the project was initialized.

```
touch index.html
```
This command was used to create files, such as the index.html page.


```
mv <oldfilename> <newfilename>
```

This command was used to rename a file within the same folder. When taking screen images, the image files were automatically named by the computer. These files were renamed using the mv command.

```
ls -li
```

This command was used to list the contents of folders.


```
git status
git add <filenames>
git commit -m "description of what is being added"
git push
```

This series of commands was used to upload edits to the remote repository. The git status command provided an updated on which files were being tracked and which ones needed to be tracked. If files needed to be tracked so that they could be uploaded to the remote repository, the git add command was run, using either one or multiple file or folder names. Then the git commit command was run, and a message was included to indicate what kind of update was occurring. Finally, the git push command pushed all these updates to the remote repository.








