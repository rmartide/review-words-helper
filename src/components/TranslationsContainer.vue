<template>
    <div>
        <Translations :showTranslations="!showTranslations" :translations="translations">
            <template slot-scope="scope">
                <ShowValue :word="scope.translation.join(', ')"></ShowValue>
            </template>
        </Translations>
        <Translations :showTranslations="showTranslations" :translations="translations">
            <template slot-scope="scope">
                {{scope.translation | join}}
            </template>
        </Translations>
    </div>
</template>

<script>
import Translations from "@components/Translations.vue";
import ShowValue from "@components/ShowValue.vue";

export default {
    name: 'TranslationsContainer',
    props: ['showTranslations', 'translations'],
    components: {
        Translations,
        ShowValue
    },
    filters: {
        join(values) {
            return values.join(", ");
        }
    }
}
</script>

<style>
</style>
