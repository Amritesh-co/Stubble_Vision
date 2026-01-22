'use client';

import { Box, Flex } from '@chakra-ui/react';
import TheorySection from '@/components/theory/TheorySection';
import DefinitionBox from '@/components/theory/DefinitionBox';
import FormulaBlock from '@/components/theory/FormulaBlock';
import AlgorithmBlock from '@/components/theory/AlgorithmBlock';
import ReferenceList from '@/components/theory/ReferenceList';

export default function TheoryPage() {
  return (
    <Flex maxW="1100px" mx="auto" px={6} py={10} direction="column" gap={16}>

      {/* ================= SYSTEM ARCHITECTURE ================= */}
<TheorySection
  id="architecture"
  title="System Architecture & Project Structure"
>
  <p>
    This section documents the complete software architecture of the
    <strong> Stubble Vision </strong> system. The architecture is designed
    following academic research software standards, emphasizing modularity,
    reproducibility, scalability, and long-term maintainability.
  </p>

  <p>
    The system is engineered as a research-grade analytical pipeline rather
    than a monolithic application. Each functional responsibility is isolated
    into a well-defined layer with strict interface boundaries. This design
    ensures that experimental logic, data handling, and visualization remain
    decoupled throughout the project lifecycle.
  </p>

  <DefinitionBox term="Layered Architecture">
    A software design paradigm in which responsibilities are organized into
    hierarchical layers, where each layer exposes only minimal interfaces and
    depends solely on the layer directly beneath it.
  </DefinitionBox>

  <p>
    The layered architecture adopted in Stubble Vision prevents cross-layer
    contamination, such as frontend-driven analytical decisions or backend-side
    visualization logic. This separation is essential for ensuring scientific
    validity and reproducibility.
  </p>

  <DefinitionBox term="Reproducibility">
    The ability to obtain identical experimental results when executing the
    same codebase, datasets, and configurations across different environments
    or time periods.
  </DefinitionBox>

  <p>
    To achieve reproducibility, all computational logic is centralized within
    the Machine Learning layer, while data transformations are explicitly
    documented and versioned. No hidden preprocessing or implicit assumptions
    are allowed at the API or interface level.
  </p>

  <DefinitionBox term="System Layers">
    The Stubble Vision system is decomposed into four primary layers, each with
    strictly defined responsibilities and interaction constraints.
  </DefinitionBox>

  <p>
    <strong>1. Data Ingestion Layer</strong><br />
    This layer is responsible for acquiring raw satellite and external datasets.
    It includes interfaces to satellite data providers, APIs, and cloud-based
    repositories. No analytical processing is performed at this stage. Data is
    stored in its original spatial, spectral, and temporal resolution to
    preserve scientific integrity.
  </p>

  <p>
    <strong>2. Machine Learning Layer</strong><br />
    The ML layer contains all algorithms, models, and mathematical logic. This
    includes classification models, segmentation networks, severity estimation
    models, and time-series predictors. The layer operates exclusively on
    processed data and outputs deterministic, version-controlled artifacts.
  </p>

  <p>
    <strong>3. Backend Services Layer</strong><br />
    This layer acts as an orchestration and communication interface. It exposes
    APIs to serve precomputed results, trigger inference workflows, and manage
    metadata. Critically, the backend is prohibited from performing analytical
    inference, ensuring that all scientific logic remains centralized.
  </p>

  <p>
    <strong>4. Frontend Visualization Layer</strong><br />
    The frontend layer is purely declarative and visualization-focused. It
    renders geospatial maps, charts, severity indicators, and temporal trends
    using precomputed outputs. No statistical transformations or thresholding
    logic is permitted at this level.
  </p>

  <DefinitionBox term="Loose Coupling">
    A system property in which components interact through minimal, stable
    interfaces, allowing individual components to be modified or replaced
    without cascading system-wide changes.
  </DefinitionBox>

  <p>
    Loose coupling allows the Stubble Vision system to evolve independently
    across layers. For example, a segmentation model can be replaced or improved
    without requiring changes to the dashboard or API contract.
  </p>

  <DefinitionBox term="High Cohesion">
    The principle that all responsibilities within a module or layer should be
    strongly related and focused on a single purpose.
  </DefinitionBox>

  <p>
    High cohesion ensures that each layer of the architecture has a clear,
    narrowly defined role. This design reduces implementation errors and
    improves the interpretability of experimental results.
  </p>

  <p>
    From a research perspective, this architectural strategy enables:
  </p>

  <ul>
    <li>Independent validation of machine learning experiments</li>
    <li>Transparent auditing of data transformations</li>
    <li>Controlled benchmarking of alternative models</li>
    <li>Scalable deployment without scientific compromise</li>
  </ul>

  <p>
    Overall, the system architecture of Stubble Vision is intentionally designed
    to align with best practices in computational science, remote sensing
    research, and applied machine learning, ensuring that the project remains
    both scientifically credible and operationally robust.
  </p>
</TheorySection>


      {/* ================= DATA LAYER ================= */}
<TheorySection id="data-layer" title="Data Layer Design">
  <p>
    The Data Layer forms the foundational backbone of the Stubble Vision system.
    All downstream analytical accuracy, model reliability, and scientific
    validity are directly dependent on the integrity, structure, and provenance
    of data handled at this stage.
  </p>

  <DefinitionBox term="Raw Data">
    Unmodified datasets obtained directly from satellite platforms or external
    providers, stored without any spatial, spectral, temporal, or radiometric
    transformations.
  </DefinitionBox>

  <p>
    Raw data is preserved exactly as received, including original coordinate
    reference systems, acquisition timestamps, spatial resolution, and sensor
    metadata. This design choice ensures that the original observations remain
    auditable and can be reprocessed using alternative methodologies in future
    experiments.
  </p>

  <DefinitionBox term="Processed Data">
    Data that has undergone deterministic and explicitly documented
    transformations, including cleaning, normalization, spatial alignment,
    spectral band extraction, and formatting for machine learning pipelines.
  </DefinitionBox>

  <p>
    The strict separation between raw and processed data prevents irreversible
    information loss and eliminates ambiguity regarding which transformations
    influenced model outcomes. Every processed artifact can be traced back to
    its raw source through metadata and version control.
  </p>

  <DefinitionBox term="Data Lineage">
    The complete traceability of data from its original source through every
    transformation stage to its final analytical or visual output.
  </DefinitionBox>

  <p>
    Maintaining explicit data lineage is essential in scientific systems to
    avoid hidden preprocessing biases, enable reproducibility, and support
    peer review or regulatory audits.
  </p>

  <p>
    The data layer supports multiple satellite-derived data modalities,
    including multispectral optical imagery and thermal anomaly observations.
    Each modality is ingested independently and harmonized only during the
    processing phase.
  </p>

  <DefinitionBox term="Multispectral Imagery">
    Satellite imagery that captures reflectance values across multiple
    discrete wavelength bands, enabling physical characterization of surface
    materials and vegetation conditions.
  </DefinitionBox>

  <p>
    For burned area and severity analysis, specific spectral bands are selected
    based on established remote sensing principles:
  </p>

  <ul>
    <li><strong>Near-Infrared (NIR):</strong> Sensitive to vegetation structure and health</li>
    <li><strong>Shortwave Infrared (SWIR):</strong> Responsive to moisture loss and burned surfaces</li>
    <li><strong>Red Band:</strong> Useful for vegetation discrimination and contrast enhancement</li>
  </ul>

  <p>
    These bands are spatially co-registered and stacked to form multi-channel
    input tensors. Band stacking preserves the physical relationships between
    wavelengths while enabling convolutional neural networks to learn
    discriminative spatial-spectral features.
  </p>

  <DefinitionBox term="Band Stacking">
    The process of combining multiple spectral bands into a single
    multi-dimensional tensor, where each band occupies a dedicated channel.
  </DefinitionBox>

  <p>
    Prior to model ingestion, all processed data undergoes normalization to
    ensure numerical stability and consistent scaling across different sensors
    and acquisition conditions. Normalization parameters are computed only from
    training data to prevent information leakage.
  </p>

  <DefinitionBox term="Data Leakage">
    The unintended introduction of information from validation or test datasets
    into the training process, leading to artificially inflated model
    performance.
  </DefinitionBox>

  <p>
    The data layer enforces strict spatial and temporal partitioning between
    training, validation, and testing datasets. This constraint is particularly
    critical in geospatial learning tasks, where spatial autocorrelation can
    otherwise invalidate evaluation metrics.
  </p>

  <p>
    By enforcing deterministic preprocessing, explicit metadata tracking, and
    immutable raw data storage, the Data Layer ensures that all subsequent
    machine learning experiments remain scientifically sound, repeatable, and
    defensible.
  </p>
</TheorySection>

{/* ================= ML LAYER ================= */}
<TheorySection id="ml-layer" title="Machine Learning Layer">
  <p>
    The Machine Learning (ML) Layer constitutes the analytical core of the
    Stubble Vision system. All computational intelligence, statistical inference,
    pattern recognition, and predictive modeling are strictly confined to this
    layer. No other layer is permitted to perform numerical reasoning or
    data-driven decision-making.
  </p>

  <DefinitionBox term="Machine Learning Layer">
    A logically isolated software layer responsible for transforming processed
    data into analytical outputs through mathematically defined models trained
    on historical observations.
  </DefinitionBox>

  <p>
    This isolation is a deliberate architectural constraint intended to ensure
    scientific integrity. By preventing inference logic from leaking into APIs
    or visualization code, the system guarantees that all analytical results
    remain reproducible, auditable, and model-version dependent.
  </p>

  <DefinitionBox term="Inference">
    The process of applying a trained machine learning model to unseen data in
    order to generate predictions, classifications, or quantitative estimates.
  </DefinitionBox>

  <p>
    Inference is executed exclusively within controlled execution contexts in
    the ML layer. The backend may only request precomputed outputs and is
    explicitly prohibited from modifying inference logic or thresholds.
  </p>

  <DefinitionBox term="Two-Stage Learning Pipeline">
    A hierarchical modeling strategy in which an initial model performs coarse
    detection or filtering, followed by one or more secondary models that carry
    out fine-grained spatial or quantitative analysis.
  </DefinitionBox>

  <p>
    The two-stage pipeline is employed to balance computational efficiency with
    analytical precision. Early-stage models reduce the search space, allowing
    later-stage models to focus only on relevant regions.
  </p>

  <p>
    <strong>Stage 1: Fire Presence Classification</strong>
  </p>

  <DefinitionBox term="Classification">
    A supervised learning task in which discrete class labels are assigned to
    input samples based on learned decision boundaries.
  </DefinitionBox>

  <p>
    In the first stage, satellite image patches corresponding to reported or
    candidate fire locations are classified into binary categories:
    <em>fire present</em> or <em>no fire</em>. This stage functions as a
    high-recall filter designed to minimize missed fire events.
  </p>

  <DefinitionBox term="Convolutional Neural Network (CNN)">
    A class of deep neural networks specialized for grid-structured data, such
    as images, that learn hierarchical spatial features through convolutional
    operations.
  </DefinitionBox>

  <p>
    CNN-based architectures are selected due to their ability to learn
    translation-invariant spatial patterns associated with fire signatures,
    including thermal anomalies, reflectance changes, and texture variations.
  </p>

  <p>
    <strong>Stage 2: Burned Area Segmentation</strong>
  </p>

  <DefinitionBox term="Segmentation">
    A dense prediction task in which a class label is assigned to every pixel
    in an image, enabling precise spatial delineation of regions of interest.
  </DefinitionBox>

  <p>
    Once fire presence is confirmed, a segmentation model is applied to identify
    the exact spatial extent of burned areas within the image patch. This step
    enables pixel-level quantification of damage.
  </p>

  <DefinitionBox term="U-Net Architecture">
    A convolutional neural network architecture designed for semantic
    segmentation, characterized by an encoder–decoder structure with skip
    connections that preserve spatial detail.
  </DefinitionBox>

  <p>
    U-Net-style models are employed due to their effectiveness in learning from
    limited labeled data and their ability to capture both global context and
    fine spatial boundaries, which is critical for accurate burned-area mapping.
  </p>

  <DefinitionBox term="Encoder–Decoder Network">
    A neural architecture in which the encoder compresses input data into a
    low-dimensional representation, while the decoder reconstructs dense
    predictions from this representation.
  </DefinitionBox>

  <p>
    Skip connections between encoder and decoder layers mitigate information
    loss caused by downsampling and improve boundary localization.
  </p>

  <p>
    <strong>Severity Estimation and Feature Derivation</strong>
  </p>

  <DefinitionBox term="Feature Engineering">
    The process of deriving informative quantitative variables from raw or
    intermediate model outputs to support downstream prediction tasks.
  </DefinitionBox>

  <p>
    Outputs from the segmentation model are converted into physically and
    agronomically meaningful metrics, including total burned area, burn density,
    and spatial fragmentation. These derived features form the input to the
    severity estimation model.
  </p>

  <DefinitionBox term="Severity Estimation">
    The task of quantifying the intensity or impact level of a detected fire
    event based on spatial extent, spectral response, and historical context.
  </DefinitionBox>

  <p>
    Severity estimation is treated as a supervised regression or ordinal
    classification problem, depending on labeling granularity. Ensemble-based
    models are favored for their robustness and interpretability.
  </p>

  <DefinitionBox term="Ensemble Learning">
    A machine learning paradigm in which multiple weak or diverse models are
    combined to produce a more stable and accurate prediction.
  </DefinitionBox>

  <p>
    Tree-based ensemble models are particularly suitable due to their ability
    to handle heterogeneous features, non-linear relationships, and limited
    training data without extensive normalization.
  </p>

  <p>
    <strong>Model Outputs and Artifacts</strong>
  </p>

  <DefinitionBox term="Analytical Artifact">
    A deterministic output generated by a machine learning model, stored in a
    standardized and reusable format.
  </DefinitionBox>

  <p>
    All ML outputs are exported as immutable artifacts, including tabular
    summaries (CSV) and geospatial datasets (GeoJSON). These artifacts form the
    sole interface between the ML layer and downstream systems.
  </p>

  <AlgorithmBlock
    steps={[
      'Load cleaned fire hotspot point data',
      'Extract spatially aligned satellite image patches',
      'Apply CNN-based binary fire classification',
      'Run U-Net-style segmentation on confirmed fire patches',
      'Compute burned area and spatial severity metrics',
      'Store outputs as versioned CSV and GeoJSON artifacts',
    ]}
  />

  <p>
    By enforcing strict computational isolation, deterministic preprocessing,
    and explicit artifact generation, the Machine Learning layer ensures that
    all analytical conclusions drawn by the Stubble Vision system remain
    scientifically defensible and reproducible.
  </p>
</TheorySection>

     
      {/* ================= MATHEMATICAL FOUNDATIONS ================= */}
      {/* ================= MATHEMATICAL FOUNDATIONS ================= */}
<TheorySection id="math" title="Mathematical Foundations">
  <p>
    The mathematical foundations of the Stubble Vision system are grounded in
    physical remote sensing principles and statistical learning theory. All
    analytical outputs are derived from well-defined mathematical formulations
    that model vegetation response to fire, spatial pattern recognition, and
    predictive inference.
  </p>

  {/* ================= SPECTRAL INDICES ================= */}
  <p>
    Fire-induced surface changes alter vegetation structure, moisture content,
    and surface composition. These changes manifest as measurable differences
    in spectral reflectance, particularly in the Near-Infrared (NIR) and
    Shortwave Infrared (SWIR) wavelength regions.
  </p>

  <DefinitionBox term="Near-Infrared (NIR)">
    Electromagnetic radiation in the wavelength range of approximately
    0.75–1.3 µm, strongly reflected by healthy vegetation due to internal leaf
    structure.
  </DefinitionBox>

  <DefinitionBox term="Shortwave Infrared (SWIR)">
    Electromagnetic radiation in the wavelength range of approximately
    1.3–2.5 µm, highly sensitive to vegetation moisture and soil exposure.
  </DefinitionBox>

  <DefinitionBox term="Normalized Burn Ratio (NBR)">
    A dimensionless spectral index designed to enhance burned-area signals by
    contrasting vegetation reflectance before and after fire events.
  </DefinitionBox>

  <FormulaBlock latex={`NBR = \\frac{NIR - SWIR}{NIR + SWIR}`} />

  <p>
    In this formulation:
  </p>

  <ul>
    <li><strong>NIR</strong> represents surface reflectance in the near-infrared band</li>
    <li><strong>SWIR</strong> represents surface reflectance in the shortwave infrared band</li>
  </ul>

  <p>
    Healthy vegetation yields high NIR reflectance and relatively low SWIR
    reflectance, resulting in high positive NBR values. Burned or moisture-depleted
    surfaces exhibit reduced NIR reflectance and increased SWIR reflectance,
    lowering the NBR value.
  </p>

  {/* ================= TEMPORAL DIFFERENCING ================= */}
  <p>
    Single-date indices are insufficient for severity estimation due to
    background variability. Temporal differencing is therefore applied to
    isolate fire-induced change.
  </p>

  <DefinitionBox term="Differenced Normalized Burn Ratio (dNBR)">
    A temporal change metric computed by subtracting post-fire NBR values from
    pre-fire NBR values.
  </DefinitionBox>

  <FormulaBlock latex={`dNBR = NBR_{pre} - NBR_{post}`} />

  <p>
    Where:
  </p>

  <ul>
    <li><strong>NBR<sub>pre</sub></strong> is the NBR computed before the fire event</li>
    <li><strong>NBR<sub>post</sub></strong> is the NBR computed after the fire event</li>
  </ul>

  <p>
    Positive dNBR values indicate vegetation loss and burn severity, while values
    near zero suggest minimal or no impact. Negative values may correspond to
    post-fire regrowth or noise.
  </p>

  {/* ================= SEVERITY THRESHOLDING ================= */}
  <DefinitionBox term="Severity Classification">
    The discretization of continuous burn metrics into ordinal severity
    categories for interpretability and decision-making.
  </DefinitionBox>

  <p>
    dNBR values are mapped to severity classes using empirically established
    thresholds:
  </p>

  <ul>
    <li><strong>Low Severity:</strong> small positive dNBR</li>
    <li><strong>Moderate Severity:</strong> intermediate dNBR</li>
    <li><strong>High Severity:</strong> large positive dNBR</li>
  </ul>

  {/* ================= CNN MATHEMATICS ================= */}
  <p>
    Fire presence detection relies on Convolutional Neural Networks (CNNs),
    which model spatial patterns through learnable convolutional filters.
  </p>

  <DefinitionBox term="Convolution Operation">
    A linear operation in which a kernel is slid across an input tensor to
    compute localized weighted sums.
  </DefinitionBox>

  <FormulaBlock
    latex={`(X * W)(i,j) = \\sum_{m} \\sum_{n} X(i+m, j+n) \\cdot W(m,n)`}
  />

  <p>
    Where:
  </p>

  <ul>
    <li><strong>X</strong> is the input image tensor</li>
    <li><strong>W</strong> is the convolutional kernel (learned weights)</li>
    <li><strong>(i,j)</strong> denotes spatial location</li>
  </ul>

  <p>
    Multiple kernels learn complementary features such as edges, textures,
    thermal anomalies, and spectral gradients associated with fire signatures.
  </p>

  {/* ================= ACTIVATION FUNCTIONS ================= */}
  <DefinitionBox term="Activation Function">
    A nonlinear transformation applied to neuron outputs to enable learning of
    complex decision boundaries.
  </DefinitionBox>

  <FormulaBlock latex={`ReLU(x) = \\max(0, x)`} />

  <p>
    The Rectified Linear Unit (ReLU) is used due to its computational efficiency
    and ability to mitigate vanishing gradient problems during deep training.
  </p>

  {/* ================= CLASSIFICATION OUTPUT ================= */}
  <DefinitionBox term="Sigmoid Function">
    A bounded nonlinear function used to model binary class probabilities.
  </DefinitionBox>

  <FormulaBlock latex={`\\sigma(x) = \\frac{1}{1 + e^{-x}}`} />

  <p>
    The sigmoid output represents the probability of fire presence within an
    image patch.
  </p>

  {/* ================= LOSS FUNCTIONS ================= */}
  <DefinitionBox term="Binary Cross-Entropy Loss">
    A loss function that quantifies the discrepancy between predicted
    probabilities and ground-truth binary labels.
  </DefinitionBox>

  <FormulaBlock
    latex={`L = -[y \\log(p) + (1 - y) \\log(1 - p)]`}
  />

  <p>
    Where <strong>y</strong> is the true label and <strong>p</strong> is the
    predicted probability. This loss penalizes confident misclassifications
    heavily, improving detection reliability.
  </p>

  {/* ================= SEGMENTATION LOSS ================= */}
  <DefinitionBox term="Dice Coefficient">
    A spatial overlap metric commonly used to evaluate segmentation quality.
  </DefinitionBox>

  <FormulaBlock
    latex={`Dice = \\frac{2 |P \\cap G|}{|P| + |G|}`}
  />

  <p>
    Dice-based loss functions are employed to handle class imbalance between
    burned and unburned pixels.
  </p>

  {/* ================= REGRESSION & SEVERITY MODEL ================= */}
  <DefinitionBox term="Regression">
    A supervised learning task aimed at predicting continuous-valued outputs
    from input features.
  </DefinitionBox>

  <p>
    Severity estimation models use regression to map derived spatial metrics
    (burned area, fragmentation, intensity proxies) to a continuous severity
    score, which may later be discretized for interpretability.
  </p>

  {/* ================= SUMMARY ================= */}
  <p>
    By grounding all analytical decisions in physically interpretable indices
    and mathematically rigorous learning formulations, the Stubble Vision system
    ensures that fire detection and severity estimation remain scientifically
    explainable, reproducible, and defensible.
  </p>
</TheorySection>


      

    </Flex>
  );
}
