<template>
    <!-- Skills Section -->
    <section id="skills" class="skills section">

<div class="container" data-aos="fade-up" data-aos-delay="100">

  <div class="row skills-content skills-animation">

    <div class="col-lg-6">

      <div class="progress">
        <span class="skill"><span>HTML</span> <i class="val">100%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div><!-- End Skills Item -->

      <div class="progress">
        <span class="skill"><span>CSS</span> <i class="val">90%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div><!-- End Skills Item -->

      <div class="progress">
        <span class="skill"><span>JavaScript</span> <i class="val">75%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div><!-- End Skills Item -->

    </div>

    <div class="col-lg-6">

      <div class="progress">
        <span class="skill"><span>PHP</span> <i class="val">80%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div><!-- End Skills Item -->

      <div class="progress">
        <span class="skill"><span>WordPress/CMS</span> <i class="val">90%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div><!-- End Skills Item -->

      <div class="progress">
        <span class="skill"><span>Photoshop</span> <i class="val">55%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div><!-- End Skills Item -->

    </div>

  </div>

</div>

</section><!-- /Skills Section -->
</template>

<script>
export default {
  name: 'SkillsSection',
  components: {
    
  },
  mounted() {
    /**
     * Animate the skills items on reveal
     */
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      // eslint-disable-next-line
      new Waypoint({
        element: item,
        offset: '80%',
        // eslint-disable-next-line
        handler: function(direction) {
          let progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });
  }
}
</script>