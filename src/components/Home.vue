<template>
  <div>
    <div class="jumbotron">
      <div class="container" id="welcome">
        <h1>Bienvenue sur le site du cs2i !</h1>
        <p>Cette plateforme à pour objectif de créer un réseau cs2i ainsi que de faciliter la recherche d'entreprise.</p>
      </div>
    </div>
    <div class="container" id="features">
      <div class="row">
        <div class="col-md-4">
          <h2>Mon profil</h2>
          <p>Si vous êtes un nouvel ou ancien élève du CS2i, gérez votre profil pour avoir plus de visibilité sur la plateforme.</p>
          <p>
            <a class="btn btn-info" v-bind:href="'#'" role="button">Gérer mon profil</a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>Les annonces</h2>
          <p>Il est possible d'accéder aux offres d'emplois et d'apprentissage pour les membres du CS2i.
            Il est possible de poster des annonces si vous êtes une entreprise en recherche d'apprentis"</p>
            <p>
              <a class="btn btn-info" v-bind:href="'/time-entries'" role="button">Voir les annonces</a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Annuaire cs2i</h2>
            <p>Liste des actuels et anciens membres du CS2i. Il est possible de voir en détail le profil de chaque personne ainsi que de lire leur CV.</p>
            <p>
              <a class="btn btn-info" v-bind:href="'/time-entries'" role="button">Accéder à la liste</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
   export default {

   };
 </script>

 <style type="text/css">

 </style>
