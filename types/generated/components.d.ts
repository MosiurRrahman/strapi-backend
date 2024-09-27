import type { Schema, Attribute } from '@strapi/strapi';

export interface ReusableListItem extends Schema.Component {
  collectionName: 'components_reusable_list_items';
  info: {
    displayName: 'list_item';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface LayoutSectionLayout extends Schema.Component {
  collectionName: 'components_layout_section_layouts';
  info: {
    displayName: 'Section Info';
    description: '';
  };
  attributes: {
    section_title: Attribute.String;
    section_subtitle: Attribute.String;
    short_description: Attribute.String;
    title: Attribute.String;
  };
}

export interface ComponentsSolutionSection extends Schema.Component {
  collectionName: 'components_components_solution_sections';
  info: {
    displayName: 'Solution Section';
    description: '';
  };
  attributes: {};
}

export interface ComponentsSolutionProcess extends Schema.Component {
  collectionName: 'components_components_solution_processes';
  info: {
    displayName: 'solution process';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    title: Attribute.String;
    description: Attribute.String;
    process_list: Attribute.Component<'reusable.list-item', true>;
  };
}

export interface ComponentsServiceComponent extends Schema.Component {
  collectionName: 'components_components_service_components';
  info: {
    displayName: 'Service Component';
    description: '';
  };
  attributes: {
    services: Attribute.Relation<
      'components.service-component',
      'oneToMany',
      'api::service.service'
    >;
    title: Attribute.String;
    sub_title: Attribute.String;
    short_description: Attribute.String;
  };
}

export interface ComponentsOurPartner extends Schema.Component {
  collectionName: 'components_components_our_partners';
  info: {
    displayName: 'our partner';
  };
  attributes: {
    logo: Attribute.Media<'images', true>;
  };
}

export interface ComponentsHeroSection extends Schema.Component {
  collectionName: 'components_components_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    sub_title: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images'>;
    success_rate: Attribute.String;
    video_link: Attribute.String;
  };
}

export interface ComponentsCounter extends Schema.Component {
  collectionName: 'components_components_counters';
  info: {
    displayName: 'counter';
  };
  attributes: {
    name: Attribute.String;
    count_number: Attribute.String;
  };
}

export interface ComponentsBlogSection extends Schema.Component {
  collectionName: 'components_components_blog_sections';
  info: {
    displayName: 'Blog Section';
  };
  attributes: {
    blogs: Attribute.Relation<
      'components.blog-section',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface ComponentsAboutSection extends Schema.Component {
  collectionName: 'components_components_about_sections';
  info: {
    displayName: 'About Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    des: Attribute.String;
    iamge: Attribute.Media<'images', true>;
    counter: Attribute.Component<'components.counter', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'reusable.list-item': ReusableListItem;
      'layout.section-layout': LayoutSectionLayout;
      'components.solution-section': ComponentsSolutionSection;
      'components.solution-process': ComponentsSolutionProcess;
      'components.service-component': ComponentsServiceComponent;
      'components.our-partner': ComponentsOurPartner;
      'components.hero-section': ComponentsHeroSection;
      'components.counter': ComponentsCounter;
      'components.blog-section': ComponentsBlogSection;
      'components.about-section': ComponentsAboutSection;
    }
  }
}
