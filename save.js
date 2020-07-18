@media (min-width: 767px) {
  .projet-list {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 70%;
   margin-left: 25%;
   margin-top: 4em;
   
    &-items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

  .projet-item {
    width: 45%;
    margin: 0.5em 0.5em;
  }

  .projet-item-meta {
    color: white;
    font-size: 1em;
    width: 70%;

    &-title {
      font-size: 1.6em;
      margin-bottom: 0.5em;
    }
  
    &-description {
      font-size: 1em;
      margin-bottom: 0.5em;
    }
  
    &-technos {
      font-size: 1em;
      margin-bottom: 0.5em;
    }
  
    &-link {
      display: flex;
      justify-content: flex-end;
      img {
        width: 1.4em;
      }
    }
  }
}

@media (min-width: 1024px) {
  .projet-list {
    margin-top: 7em;

    &-title {
      margin-bottom: 3em;
    }
  
    &-items {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex: 0 0 100%;
    }
  
    &-thumbnail {
      width: 100%;
    }
  }

  .projet-item {
    width: 45%;

  }
}

@media (min-width: 1600px) {
  .projet-list {
    margin-top: 7em;
    width: 40%;
    margin-left: 45%;
    margin-top: 8em;

    &-title {
      font-family: 'BioRhyme';
      margin-bottom: 3em;
    }
  
    &-items {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex: 0 0 100%;
    }
  
    &-thumbnail {
      width: 100%;
    }
  }

  .projet-item {
    width: 40%;
  }
}


