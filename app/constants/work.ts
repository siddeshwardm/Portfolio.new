import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2020',
    title: 'Gurkul, Bhalki',
    subtitle: "Pre-University education ",
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2022',
    title: 'DSCE ',
    subtitle: 'Information Science and Engineering ',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'PaidCoders',
    subtitle: 'Software Engineer Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]