# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Versionnement Sémantique](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2024-07-15
### Changed
- Modification de Puppeteer pour y ajouter puppeteer-extra et puppeteer-extra-plugin-stealth

## [1.0.4] - 2023-08-20
### Added
- Ajout d'une vérification pour déterminer si un compte TikTok existe en utilisant l'attribut `data-e2e="user-post-item-list"`.

### Changed
- Modification de la méthode de détection des comptes TikTok inexistants pour une meilleure précision.

### Fixed
- Correction d'un problème où le module ne pouvait pas correctement identifier les comptes TikTok inexistants en fonction de la langue du navigateur.

## [1.0.3] - 2023-08-17
### Fixed
- Correction de la version dans le package.json.

## [1.0.2] - 2023-08-17
### Fixed
- Ajout de l'argument --no-sandbox afin que le module fonctionne sous Debian.

## [1.0.1] - 2023-08-15
### Fixed
- Correction du README.

## [1.0.0] - 2023-08-15
### Added
- Publication du projet.

