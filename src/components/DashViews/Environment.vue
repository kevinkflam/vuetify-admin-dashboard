<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md10>
        <material-card
          color="success"
          title="25 New Trees Planted!"
          text="Loving the new greenery!"
        >
          With the addition of the 25 new trees just this past week, UBC has
          managed to plant over 5000 trees this whole year! The Pacific Spirit
          Park has redeveloped and grow into its luscious green space once
          again! We all remember that deadly fire at the end of 2020! Even the
          firefighters' water pumps and hoses froze up with the record-breaking
          frigid temperatures. Oh wow, 2020, such a long time ago... what an
          unforgettable year indeed. <br />
          <img
            width="1000"
            height="350"
            src="https://www.motherjones.com/wp-content/uploads/2019/07/Trees-7-4-19.jpg?w=1200&h=630&crop=1"
          />
        </material-card>
        <material-card
          color="success"
          title="Wind turbines go woosh woosh woosh"
          text="Let's fly some kites!"
        >
          The newly installed at the edge of Wreck Beach have certainly made a
          positive impact on UBC's plan to become the most green university in
          Canada. And yes although we do pride ourselves in the Magic Forest
          near Totem, we aren't talking about <i>that</i> type of green! UBC has
          cut down on using fossil fuels by a whopping 50% and the new wind
          turbines have supplied 34% of all of UBC's energy, isn't that
          awesome?! <br />
          Hidden away near the cliffs of Wreck Beach, sunbathing students can
          listen to the calm whooshing sound the turbines make, along with the
          calm splashing waves, to enjoy a peaceful Sunday afternoon relaxing
          and leaving their worries behind. Along with the new Musqueam totem
          poles along the infamous stairs leading to the beach, the UBC
          community has strengthened their relationship with the First Nations
          people, ensuring that the First Nations needs are put first and
          foremost as the UBC administration understands that we are on the
          traditional, ancestral, and unceded territory of the Musqueam people.
          <br />
          <v-flex class="d-flex justify-space-between">
            <img
              width="400"
              src="https://www.arcgis.com/sharing/rest/content/items/c93865c7394f4113b30cd0ec34742585/resources/1575060899471.jpeg?w=2509"
            />
            <img
              width="500"
              src="https://students.ubc.ca/sites/students.ubc.ca/files/30061924456_79340133ff_k%20%281%29.jpg"
            />
          </v-flex>
        </material-card>
        <material-card
          color="success"
          title="The bright future of solar power!"
          text="Sunny days are the best days!"
        >
          Did you notice those newly installed solar panels on top of the AMS
          Nest? Those are the new solar panels, delivering up to a whopping 1360
          watts per square metre! These new solar panels will be used as a
          dry-run for UBC to see if the solar panels can deliver energy
          efficiently, so the 123 new panels will be used to run the whole Nest,
          as well as the nearby Robert H. Lee alumni centre. In addition, the
          excess energy (hopefully!) will be delivered to the West Parkade
          parking lot to charge the electric vehicles. Speaking of, UBC has had
          to install 50 more electric vehicle charging stations, due to the high
          rise of EVs in the city! And to thnk just 10 years ago when we saw the
          new Cybertruck and laughed, but now you might even see a couple on
          each floor!
          <br />
          <img
            width="500"
            src="https://www.sciencealert.com/images/2019-06/processed/hmm-solar_1024.jpg"
          />
          <img
            width="500"
            height="203"
            src="data:image/jpeg;base64,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"
          />
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  //
};
</script>
