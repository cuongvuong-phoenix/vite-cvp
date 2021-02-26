# About

Test...

- [Normal link](#)
- `Inline code`
- [`Link with inline-code (no language)`](#)
- [`Link with inline-code (language)`{lang=markup}](#)

This template is consisted of:

- `Vite`
- `Vue-Router`

```
unknown language
```

```javascript
import { computed } from 'vue';
import { useStore } from '../store';
import { useI18n } from 'vue-i18n';
import Hello from '../components/Hello.vue';

const store = useStore();
const { t } = useI18n();

const counter = computed(() => store.state.counter);
```
