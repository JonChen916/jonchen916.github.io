---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<style>
  /* 调整图片和文字的比例及间距 */
  .paper-box {
    display: flex !important;
    margin-bottom: 15px !important;
    align-items: flex-start !important;
  }

  .paper-box-image {
    /* 缩小图片容器宽度，适应纵向封面图 */
    flex: 0 0 18% !important; 
    max-width: 150px !important;
    margin-right: 20px !important; /* 这个值决定了图文之间的间距，你可以根据喜好微调 */
  }

  .paper-box-text {
    flex: 1 !important;
    /* 移除文字左侧可能存在的默认 padding */
    padding-left: 0 !important; 
  }

  /* 调整文字内部行高，让排版更紧凑 */
  .paper-box-text p, .paper-box-text ul {
    margin-bottom: 5px !important;
  }
</style>


{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

# About Me
<span class='anchor' id='about-me'></span>

**Jiong (Jon) Chen** is a doctoral student in 💤Sleep Medicine and 🖥️Signal Processing, focusing on the extraction of digital biomarkers for adverse health outcomes from multimodal sleep data. His work integrates physiological signal analysis with advanced computational methods to derive clinically meaningful indicators related to cognitive decline and neurodegeneration, cardiometabolic conditions, and mental health outcomes.

He holds a bachelor’s degree in Medical Information Management and Information Systems from **Huazhong University of Science and Technology (HUST)** and is currently pursuing a doctoral degree at the [Institute of Medical Technology](https://imt.bjmu.edu.cn/), **Peking University Health Science Center**. During his PhD training, he has undertaken joint research at the **University of California, San Francisco (UCSF) Weill Institute for Neurosciences** within [The Moon (Sleep) Lab for Artificial Intelligence Technology](https://moonlait.ucsf.edu/).

# 📖 Educations

<div style="margin-top: 20px;">
  <div style="display: flex; align-items: flex-start; margin-bottom: 30px;">
    <div style="flex: 0 0 80px; margin-right: 25px; text-align: center;">
      <img src="/images/pku_logo.png" style="width: 110%; max-height: 80px; object-fit: contain;" alt="PKU">
    </div>
    <div style="flex: 1; line-height: 1.6;">
      <strong>2022.09 - 2027.06 (Expected)</strong><br>
      <strong>Ph.D. Candidate in Medical Technology</strong>, Institute of Medical Technology<br>
      Peking University (PKU)
    </div>
  </div>

  <div style="display: flex; align-items: flex-start; margin-bottom: 30px;">
    <div style="flex: 0 0 100px; margin-right: 25px; text-align: center;">
      <img src="/images/ucsf_logo.png" style="width: 100%; max-height: 100px; object-fit: contain;" alt="UCSF">
    </div>
    <div style="flex: 1; line-height: 1.6;">
      <strong>2026.03 - 2026.09</strong><br>
      <strong>Joint PhD Training</strong>, Department of Psychiatry and Behavioral Sciences<br>
      University of California, San Francisco (UCSF)
    </div>
  </div>

  <div style="display: flex; align-items: flex-start; margin-bottom: 30px;">
    <div style="flex: 0 0 80px; margin-right: 25px; text-align: center;">
      <img src="/images/hust_logo.png" style="width: 100%; max-height: 80px; object-fit: contain;" alt="HUST">
    </div>
    <div style="flex: 1; line-height: 1.6;">
      <strong>2018.09 - 2022.06</strong><br>
      <strong>B.S. in Medical Info. Management</strong> & <strong>B.A. in English (Second Degree)</strong><br>
      Huazhong University of Science and Technology (HUST)
    </div>
  </div>
</div>

# 🔥 News
- *2026.06*: &nbsp;🎙️ Invited for an **Oral Presentation** and Poster Exhibition at the **Associated Professional Sleep Societies (SLEEP 2026)**, Baltimore, USA.
- *2025.09*: &nbsp;🏆 Honored with the **Asian Society of Sleep Medicine (ASSM 2025) Young Investigator Award** in Singapore. 
- *2025.09*: &nbsp;🎙️ Invited for an **Oral Presentation** and presented Posters at the **World Sleep Congress (World Sleep 2025)**, Singapor.

# 📝 Publications 
## 📑 Peer-review Papers 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">A&D 2025</div>
      <img src='images/rem_latency_ad.png' alt="REM Sleep & AD" width="75%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Association of rapid eye movement sleep latency with multimodal biomarkers of Alzheimer's disease](https://doi.org/10.1002/alz.14495)

Jiangli Jin\*, **Jiong Chen\***, Clémence Cavaillès, Kristine Yaffe, Joseph Winer, Laura Stankeviciute, Brendan P. Lucey, Xiao Zhou, Song Gao, Dantao Peng, Yue Leng

- Investigated the association between REM sleep latency and AD-related biomarkers (Aβ, tau, neurodegeneration).
- Highlighted the potential of specific sleep macrostructure metrics as early indicators of preclinical Alzheimer's pathology.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">CHB 2024</div>
      <img src='images/telemedicine_meta.png' alt="Telemedicine Meta-analysis" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Effectiveness of telemedicine on common mental disorders: An umbrella review and meta-meta-analysis](https://doi.org/10.1016/j.chb.2024.108325)

**Jiong Chen**, Can Li, Kai An, Xueting Dong, Jingyun Liu, Hong Wu


- Conducted a comprehensive umbrella review and meta-meta-analysis on the efficacy of telemedicine for mental health.
- Synthesized evidence across multiple psychiatric conditions to provide clinical decision-making frameworks.
</div>
</div>

## 🌍 Conference Papers

- **Sleep Temporal Entropy: A Novel Sleep Fragmentation Biomarker Predicting Cardiometabolic Disease and Mortality Risk**, **Jiong Chen**, et al., *18th World Sleep Congress (World Sleep 2025)*. Published in *Sleep Medicine*, 2025. [DOI: 10.1016/j.sleep.2025.108489](https://doi.org/10.1016/j.sleep.2025.108489)
- **Sleep Macro- and Microarchitecture in Major Depressive Disorder with Sleep State Misperception**, **Jiong Chen**, et al., *18th World Sleep Congress (World Sleep 2025)*. Published in *Sleep Medicine*, 2025. [DOI: 10.1016/j.sleep.2025.107084](https://doi.org/10.1016/j.sleep.2025.107084)
- **Artificial Intelligence-Derived Sleep Age from Heartbeat and Respiratory Signals**, **Jiong Chen**, et al., *SLEEP 2025*, Published in *Sleep*, 2025. [DOI: 10.1093/sleep/zsaf090.0438](https://doi.org/10.1093/sleep/zsaf090.0438)
- **Developing a Novel Marker of Sleep Fragmentation for Cardiometabolic and Mortality Risk Prediction**, **Jiong Chen**, et al., *SLEEP 2025*, Published in *Sleep*, 2025. [DOI: 10.1093/sleep/zsaf090.1101](https://doi.org/10.1093/sleep/zsaf090.1101)
- **Association of Polysomnography-Assessed Sleep Parameters with Alzheimer’s Disease Biomarkers in Older Adults**, **Jiong Chen**, et al., *Alzheimer's Association International Conference (AAIC 2024)*. Published in *Alzheimer's & Dementia*, 2025. [DOI: 10.1002/alz.088517](https://doi.org/10.1002/alz.088517)
- **Association Between Objective Sleep Architecture and Biomarkers of Alzheimer's Disease**, **Jiong Chen**, et al., *SLEEP 2024*, Published in *Sleep*, 2024. [DOI: 10.1093/sleep/zsae067.0103](https://doi.org/10.1093/sleep/zsae067.0103)





# 🎖 Honors and Awards

- *2025.9*: &nbsp;🏆 **ASSM 2025 Young Investigator Award**, Asian Society of Sleep Medicine (ASSM). 
- *2024 - 2025*: &nbsp;🏅 **Outstanding Research Award**, Peking University.
- *2023.10*: &nbsp;📜 **Fosun Pharma Scholarship**, Huazhong University of Science and Technology.
- *2020.12*: &nbsp;🎗️ **Advanced Individual in COVID-19 Prevention**, Huazhong University of Science and Technology.

# 💬 Invited Talks
- **【Oral】** *Sleep Macro- and Microarchitecture in Major Depressive Disorder with Sleep State Misperception*, **SLEEP 2026** (Annual Meeting of the APSS), Baltimore, USA, June 2026.
- **【Oral】** *Sleep Temporal Entropy: A Novel Sleep Fragmentation Biomarker Predicting Cardiometabolic Disease and Mortality Risk*, **World Sleep 2025**, Singapore, September 2025.
- **【Oral】** *Developing a Novel Marker of Sleep Fragmentation for Cardiometabolic and Mortality Risk Prediction*, **SLEEP 2025**, Seattle, USA, June 2025.
- **【Poster】** *Artificial Intelligence-Derived Sleep Age from Heartbeat and Respiratory Signals*, **SLEEP 2025**, Seattle, USA, June 2025.
- **【Poster】** *Association Between Objective Sleep Architecture and Biomarkers of Alzheimer's Disease*, **SLEEP 2024**, Houston, USA, June 2024.

# 💻 Projects
- **Summer Scholar Program on Global Health** | *International Scholar*
  - **Host**: Saint Louis University (SLU), USA, 2019.
  - Completed intensive coursework in Global Health, focusing on healthcare systems and international medical collaboration.
- **National Science and Technology Innovation 2030 — "Brain Science and Brain-Inspired Intelligence" Major Project** | *Key Member*
  - **Project**: Establishment of a Multi-center and Multi-dimensional Clinical Sample Bank and Big Data Analysis Platform for Sleep Disorders (No. 2021ZD0201902).
  - Responsible for multimodal sleep data integration and advanced physiological signal analysis.

- **MoonLAIT Project (S365 Sleep Cohort)** | *Key Member (PKU Site)*
  - Leading a multi-center longitudinal study to monitor sleep patterns using specialized pillow sensors.
  - Coordinating intern teams and managing standard operating procedures for large-scale data collection.

- **National Innovation and Entrepreneurship Project for Students** | *Key Member*
  - **Project**: Personal Risk Prediction and Health Management App for Atherosclerotic Cardiovascular Disease based on China-PAR Model.
  - Formally recognized at the national level; led the market research and database management modules.
