<template>
<div class="modal-shadow" @click.self="close">
  <div class="modal">
    <div class="modal-close" @click="close">&#10006;</div>
    <h3 class="modal-title">Выбор населённого пункта:</h3>
    <div class="modal-content">
      <SearchSelect/>
      <button class="modal-content__button" @click="sendData">Подтвердить</button>
    </div>
  </div>
</div>
</template>

<script>
import SearchSelect from '../SearchSelect.vue';

export default{
  name: 'SelectCity',
  components: {
    SearchSelect
  },
  data: () => ({
    city: '',
    options: [],
    store: {},
  }),
  async mounted() {
    this.store = useCitiesStore();
    await this.setCurrentCity()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    sendData() {
      this.$emit('click-btn')
    },
  }
}
</script>

<style scoped>

.modal-shadow {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}

.modal {
  background: #fff;
  border-radius: 8px;
  padding: 28px 19px 32px;
  max-width: 770px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;

  /* @include tablets {
    padding: 40px 30px 30px;
    max-width: 550px;
  }

  @include phones {
    padding: 30px 20px 20px;
    max-width: 400px;
    width: 250px;
  } */
}
.modal-close {
  border-radius: 50%;
  color: #979797;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 18px;
  right: 18px;
  width: 16px;
  height: 16px;
  font-size: 24px;
  cursor: pointer;
/* 
  @include phones {
    top: 15px;
    right: 15px;
    font-size: 20px;
  } */
}

.modal-title {
  color: #272727;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
}

.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 12px;
}

.modal-content__button {
  background: transparent;
  color: #ACACAC;
  border: 1px solid #979797;
  text-align: center;
  padding: 13px 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  box-sizing: border-box;
/* 
  @include tablets {
    padding: 15px 20px;
    margin-top: 15px;
    font-size: 16px;
  }

  @include phones {
    padding: 10px 15px;
    margin-top: 10px;
    font-size: 14px;
  } */
}

/* .modal-footer__button:hover {
  background: #c4a162;
} */
</style>