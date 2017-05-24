<template>
  <div id="wrapper">
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#/">CS2i</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse" aria-expanded="false">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#/">Accueil</a></li>
            <li><a href="#/inscription">Inscription</a></li>
            <li><a href="#/visuAnnonce">Annonce</a></li>
            <li><a href="#/annuaire">Annuaire</a></li>
          </ul>
          <ul id="accessProfil" class="nav navbar-nav navbar-right" style="display: none;">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mon profil <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="">Accéder à mon profil</a></li>
                <li><a href="">Modifier mon CV</a></li>
                <li role="separator" class="divider"></li>
                <li><a id="btn_deconnexion" href="">Se déconnecter</a></li>
              </ul>
            </li>
          </ul>
          <form id="formConnexion" class="navbar-form navbar-right">
            <div class="form-group">
              <input id="inputLogin" type="text" placeholder="Email" class="form-control">
            </div>
            <div class="form-group">
              <input id="inputPwd" type="password" placeholder="Password" class="form-control">
            </div>
            <button type="submit" id="btn_connexion" class="btn btn-success">Se connecter</button>
            <a id="btn_google" class="btn btn-social-icon btn-google">
              <i class="fa fa-google"></i>
            </a>
            <a id="btn_linkedin" class="btn btn-social-icon btn-linkedin">
              <i class="fa fa-linkedin"></i>
            </a>
          </form>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
