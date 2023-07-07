<template>
  <div class="card">
    <img class="card__img" :src="product.main_image_thumb_300" :alt="product.present_name">
    <div class="card-info">
      <p class="card-info__category-name">{{ product.category.name }}</p>
      <p class="card-info__present-name"> {{ product.present_name }} </p>
      <p class="card-info__comment-name">{{ product.comment_name }}</p>
      <p class="card-info__price">{{ product.price }} ₽</p>
    </div>
    <button v-if="product.allowed && product.avialabel" class="card__btn card__btn_active">В корзину</button>
    <button v-else disabled class="card__btn card__btn_disabled">Нет в наличии</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  }
}
</script>

<style scoped>
.card {
  max-width: 276px;
  max-height: max-content;
  height: 595px;
  background: #fff;
  margin: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 18px;
}

.card__img {
  width: 100%;
}

.card-info {
  padding: 6px 32px 16px;
}

.card-info__category-name {
  color: #979797;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
}

.card-info__present-name {
  color: #272727;
  margin: 0;
  padding-top: 4px;
  font-size: 20px;
  font-weight: 600;
  word-wrap: break-word;

}

.card-info__comment-name {
  font-size: 16px;
  font-weight: 400;
  color: #272727;
  margin: 0;
  padding-top: 9px;
}

.card-info__price {
  color: #272727;
  font-size: 26px;
  font-weight: 600;
  margin: 0;
  padding-top: 14px;
}

.card__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 85%;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0;
  margin-top: auto;
}

.card__btn_disabled {
  background: #fff;
  border: 2px solid #9797974D;
  color: #27272780;
  
}

.card__btn_active {
  background: linear-gradient(to left, #FFA800 0%, #FF6F00 100%);
  color: #fff;
}

.card__btn_active:hover {
  -webkit-box-shadow: 0px 0px 10px 8px rgba(255, 168, 0, 0.27);
-moz-box-shadow: 0px 0px 10px 8px rgba(255, 168, 0, 0.27);
box-shadow: 0px 0px 10px 8px rgba(255, 168, 0, 0.27);
}
</style>