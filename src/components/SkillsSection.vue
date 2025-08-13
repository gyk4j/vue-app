<template>
  <!-- Skills Section -->
  <section id="skills" class="skills section">

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row skills-content skills-animation" ref="skillsAnimation">

        <template v-for="skill in value.skills">
          <div class="col-lg-6" v-bind:key="skill.id"> <!-- v-if="(skill.id % 3) == 0" -->

            <div class="progress">
              <span class="skill"><span>{{ skill.name }}</span> <i class="val">{{ skill.value }}%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" ref="progressBar" v-bind:aria-valuenow="skill.value" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->
          
          </div>
        </template>

      </div>

    </div>

  </section><!-- /Skills Section -->
</template>

<script>
import Waypoint from 'waypoints/lib/noframework.waypoints.js'

export default {
  name: 'SkillsSection',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      MAX_ROWS: 3
    }
  },
  mounted() {
    /**
     * Animate the skills items on reveal
     */
    let skillsAnimation = this.$refs.skillsAnimation
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function(/*direction*/) {
          let progress = this.$refs.progressBar
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });
  }
}
</script>